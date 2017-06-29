// 代码整理：懒人之家

// ==================================================
// script realized by G�rard Ferrandez - June 2006
// http://www.dhteumeuleu.com
// ==================================================
 
id = function(o) { return document.getElementById(o); }
px = function (x) {	return ''.concat(Math.round(x), 'px'); }
 
//////////////////////////////////////////////////////////////////////////////
function resize() {	gf.resize(); }
onresize = resize;
 
document.onmousemove = function(e)
{
	if(window.event) e=window.event;
	gf.xm = (e.x || e.clientX) - gf.nx - gf.nw * .5;
	gf.ym = (e.y || e.clientY) - gf.ny - gf.nh * .5;
}
 
//////////////////////////////////////////////////////////////////////////////
var gf = {
	O    : [],
	cont : 0,
	N    : 0,
	S    : 0,
	img  : 0,
	spa  : 0,
	xm   : 0,
	ym   : 0,
	nx   : 0,
	ny   : 0,
	nw   : 0,
	nh   : 0,
	cx   : 0,
	cy   : 0,
	zoom : 1,
	x    : 0,
	y    : 0,
	z    : -40000,
	xt   : 0,
	yt   : 0,
	zt   : 0,
//////////////////////////////////////////////////////////////////////////////
	resize : function ()
	{
		var o   = id('canvas');
		gf.nx   = o.offsetLeft;
		gf.ny   = o.offsetTop;
		gf.nw   = o.offsetWidth;
		gf.nh   = o.offsetHeight;
		gf.zoom = gf.nh / 700;
	},
 
	CObj : function (n)
	{
		this.n                = n;
		this.x                = gf.zoom * Math.random() * gf.nw * 2 - gf.nw;
		this.y                = gf.zoom * Math.random() * gf.nh * 2 - gf.nh;
		this.z                = Math.round(n * (10000 / gf.N));
		this.w                = gf.img[n].width;
		this.h                = gf.img[n].height;
		this.oxt              = gf.spa[n];
		this.oxs              = this.oxt.style;
		this.txt              = gf.spa[n].innerHTML;
		this.oxt.innerHTML    = "";
		this.obj              = gf.img[n];
		this.obs              = this.obj.style;
		this.obj.parent       = this;
		this.obj.onclick      = function() { this.parent.click(); }
		this.obj.ondrag       = function() { return false; }
		this.oxt.style.zIndex = this.obj.style.zIndex = Math.round(1000000 - this.z);
		this.F                = false;
		this.CF               = 100;
		this.sto              = [];
		
		this.anim = function()
		{
			var f = 700 + this.z - gf.z;
			if (f > 0)
			{
				var d               = 1000 / f;
				var X               = gf.nw * .5 + ((this.x - gf.x - gf.cx) * d);
				var Y               = gf.nh * .5 + ((this.y - gf.y - gf.cy) * d);
				var W               = d * this.w * gf.zoom;
				var H               = d * this.h * gf.zoom;
				this.obs.left       = px(X - W * .5);
				this.obs.top        = px(Y - H * .5);
				this.obs.width      = px(W);
				this.obs.height     = px(H);
				this.oxs.visibility = (this.CF-- > 0 && Math.random() > .9) ? "hidden" : "visible";
				this.oxs.left       = px(X - W * .5);
				this.oxs.top        = px(Y + H * .5);
				if((gf.zt - gf.z) < 20)
				{
					if(!this.F)
					{
						this.F            = true;
						this.CF           = Math.random() * 200;
						this.oxs.fontSize = px(1 + d * 20 * gf.zoom);
						var T             = "";
						var tn            = this.txt.length;
						for(var i = 0; i < tn; i++)
						{
							T = T.concat(this.txt.charAt(i));
							this.sto[i] = setTimeout('gf.O['.concat(n, '].oxt.innerHTML = "', T.concat("_"), '";'), Math.round(f / 4) + 32 * i);
						}
					}
				}
				else
				{
					this.F = false;
					this.oxt.innerHTML = "";
				}
			}
			else
			{
				this.x  = gf.zoom * Math.random() * gf.nw * 2 - gf.nw;
				this.y  = gf.zoom * Math.random() * gf.nh * 2 - gf.nh;
				this.z += 10000;
				this.oxs.zIndex = this.obs.zIndex = Math.round(1000000 - this.z);
			}
		}
	
		this.cto = function()
		{
			var i = this.txt.length;
			while (i--) clearTimeout(this.sto[i]);
		}
	
		this.click = function()
		{
			var i = gf.N;
			while (i--) gf.O[i].cto();
			if(gf.S != this)
			{
				gf.xt = this.x;
				gf.yt = this.y;
				gf.zt = this.z;
				gf.S  = this;
			}
			else
			{
				gf.S   = 0;
				gf.zt += 1600;
			}
		}
	},
	
	init : function ()
	{
		gf.cx   = gf.nw / 2;
		gf.cy   = gf.nh / 2;
		gf.cont = id("canvas");
		gf.img  = id("canvas").getElementsByTagName("img");
		gf.spa  = id("canvas").getElementsByTagName("span");
		gf.N    = gf.img.length;
		for (var i = 0; i < gf.N; i++) gf.O[i] = new gf.CObj(i);
		gf.run();
		gf.O[0].click();
	},
	
	run : function ()
	{
		gf.cx += (gf.xm - gf.cx) * .1;
		gf.cy += (gf.ym - gf.cy) * .1;
		gf.x  += (gf.xt - gf.x)  * .05;
		gf.y  += (gf.yt - gf.y)  * .05;
		gf.z  += (gf.zt - gf.z)  * .05;
		var i = gf.N;
		while (i--) gf.O[i].anim();
		setTimeout(gf.run, 16);
	}
}
 
onload = function() {
	resize();
	gf.init();
}
