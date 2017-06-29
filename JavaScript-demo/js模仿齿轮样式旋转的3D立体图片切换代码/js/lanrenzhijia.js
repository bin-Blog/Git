// 代码整理：懒人之家


var car = { 
	scr  : 0, 
	img  : 0, 
	xm   : 0, 
	ym   : 0, 
	xmb  : 0, 
	ymb  : 0, 
	drag : false, 
	cosY : 0, 
	cosX : 0, 
	sinY : 0, 
	sinX : 0, 
	xd   : 0, 
	yd   : -10, 
 
	run : function () { 
		/* ==== rotation speed ==== */ 
		var Ay = car.xd / (car.scr.offsetWidth * .2); 
		var Ax = car.yd / (car.scr.offsetHeight * .2); 
		/* ==== vertical / horizontal friction ==== */ 
		if(!car.drag){ 
			if(Math.abs(car.xd) > Math.abs(car.yd)){ 
				car.xd *= .99; 
				car.yd *= .95; 
			} else { 
				car.xd *= .95; 
				car.yd *= .99; 
			} 
		} 
		/* ==== rotation angles ==== */ 
		car.cosY = Math.cos(Ay); 
		car.cosX = Math.cos(Ax); 
		car.sinY = Math.sin(Ay); 
		car.sinX = Math.sin(Ax); 
		/* ==== animate images ==== */ 
		for(var i = 0; i < 8; i++) car.img[i].rotate(); 
		/* ==== loop ==== */ 
		setTimeout(car.run, 16); 
	}, 
 
	/* ==== mouse mov ==== */ 
	mouse : function (e) { 
		this.xm = e.clientX; 
		this.ym = -e.clientY; 
		if(this.drag){ 
			this.xd = this.xm - this.xmb; 
			this.yd = this.ym - this.ymb; 
		} 
		this.xmb = this.xm; 
		this.ymb = this.ym; 
	}, 
 
	/* ==== dim screen ==== */ 
	resize : function () { 
		car.nw = car.scr.offsetWidth; 
		car.nh = car.scr.offsetHeight; 
	}, 
 
	/* ==== init script ==== */ 
	init : function () { 
		/* ==== window mousemove event ==== */ 
		document.onmousemove = function (e) { 
			if (window.event) e = window.event; 
			car.mouse(e); 
		} 
		/* ==== window onresize event ==== */ 
		onresize = car.resize; 
		/* ==== init images ==== */ 
		this.scr = document.getElementById('screen'); 
		var img = this.scr.getElementsByTagName('img'); 
		this.img = []; 
		car.resize(); 
		var k = 0; 
		for(var xi = -1; xi <= 1; xi+=2) { 
			for(var yi = -1; yi <= 1; yi+=2) { 
				for(var zi = -1; zi <= 1; zi+=2) { 
					var o = img[k++]; 
					/* ==== replace images by canvas ==== */ 
					if (document.createElement("canvas").getContext) { 
						var src = o; 
						o = document.createElement("canvas"); 
						o.canvas = true; 
						/* ==== flip function ==== */ 
						o.flip = function (fx, fy) { 
							var context = this.getContext("2d"); 
							context.translate(fx<0?this.w:0, fy<0?this.h:0); 
							context.scale(fx, fy); 
							context.drawImage(this.img, 0, 0, this.w, this.h); 
						} 
						o.img = src; 
						this.scr.appendChild(o); 
					} 
					/* ==== HTML Objects ==== */ 
					this.img.push(o); 
					o.css = o.style; 
					o.x3d = xi; 
					o.y3d = yi; 
					o.z3d = zi; 
					o.py  = 0; 
					o.px  = 0; 
					o.onselectstart = function () { return false; } 
					o.ondrag        = function () { return false; } 
					o.onmousedown   = function () { 
						car.drag = true; 
						car.xd = 0; 
						car.yd = 0; 
						this.css.cursor = "move"; 
						return false; 
					} 
					o.onmouseout    = function () {car.drag = false; this.css.cursor = "pointer"; return false; } 
					o.onmouseup     = function () {car.drag = false; this.css.cursor = "pointer"; return false; } 
					o.rotate        = function () { 
						/* ==== trigo ==== */ 
						var tz   = this.z3d * car.cosY - this.x3d * car.sinY; 
						this.x3d = this.z3d * car.sinY + this.x3d * car.cosY; 
						this.z3d = this.y3d * car.sinX + tz * car.cosX; 
						this.y3d = this.y3d * car.cosX - tz * car.sinX; 
						var zf   = 1 / (this.z3d / 10 + 1); 
						var x2d  = this.x3d * zf * car.nw * .2; 
						var y2d  = this.y3d * zf * car.nh * .2; 
						var w2d  = Math.abs(x2d * 1.6); 
						var h2d  = Math.abs(y2d * 1.6); 
						if (this.loaded) { 
							/* ==== HTML animation ==== */ 
							this.css.left   = Math.round(car.nw * .5 - x2d - w2d * .5) + 'px'; 
							this.css.top    = Math.round(car.nh * .5 - y2d - h2d * .5) + 'px'; 
							this.css.width  = Math.round(w2d) + 'px'; 
							this.css.height = Math.round(h2d) + 'px'; 
							this.css.zIndex = Math.round(zf * 100); 
							/* ==== flipv ==== */ 
							if ((y2d < 0) != this.py) { 
								this.py = (y2d < 0); 
								if (this.filters) 
									this.filters[1].enabled = (y2d < 0) ? "true" : "false"; 
								else if (this.canvas) 
									this.flip(1, -1); 
							} 
							/* ==== fliph ==== */ 
							if ((x2d < 0) != this.px) { 
								this.px = (x2d < 0); 
								if (this.filters) 
									this.filters[0].enabled = (x2d < 0) ? "true" : "false"; 
								else if (this.canvas) 
									this.flip(-1, 1); 
							} 
						} else { 
							/* ==== load image ==== */ 
							if ((this.canvas && this.img.complete) || this.complete) { 
								this.loaded = true; 
								if (this.canvas) { 
									this.w = this.img.width; 
									this.h = this.img.height; 
									this.width = this.w; 
									this.height = this.h; 
									var context = this.getContext("2d"); 
									context.drawImage(this.img, 0, 0, this.w, this.h); 
								} 
							} 
						} 
					} 
				} 
			} 
		} 
		this.run(); 
	} 
} 