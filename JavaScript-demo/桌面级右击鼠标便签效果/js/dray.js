		
		var l = 0,t=0,x=0,y=0;
		var isOver = false;
		var zindex = 3;
		function init(titleDom){
			//tm_center(divObj);//�����¼�
			/*��һ��*/
			var thisDom = titleDom;//��ȡ��ǰtitle����
			var parentDom = thisDom.parentNode;//��ȡ��ǰtitle��Ӧ��div
			titleDom.onmousedown = function(event){//1111��ʼ
				var e = event || window.event;//Ϊ�˼���ie�ͻ��
				x = e.clientX;//������ڵ�x����
				y = e.clientY;//������ڵ�y����
				
				l = parseInt(parentDom.style.left);//�����������ߵ�λ��left
				t = parseInt(parentDom.style.top);//���������������λ��top
				isOver = true;//�����϶���ʶ,��ֹ����
				zindex++;
				parentDom.style.zIndex = zindex;
				document.onmousemove = function(event){
					if(isOver){
						var e = event || window.event;//Ϊ�˼���ie�ͻ��
						var newLeft = l + e.clientX - x;//�µ���߾�
						var newTop = t + e.clientY - y;//�µĶ����߾�
						parentDom.style.left = newLeft+"px";
						parentDom.style.top = newTop+"px";
					}
				
				}; //����ƶ����¼�
				document.onmouseup = function(event){
					if(isOver){
						isOver = false;//��ԭ��ʶ
					}
				};//����ɿ����¼�

			};///111����
		};

