$(function(){
	//模态框中again按钮的点击事件
	$('#again').on('click',function(){
		//刷新页面
		window.location.href = "index.html";
	});
	
	//将图片放置在数组中，然后循环到列表组中
	var starArray = new Array('img/star0.gif','img/star1.gif','img/star2.gif','img/star3.gif','img/star4.gif','img/star5.gif');
	
	$('.list-group').find('li').each(function(index){
		
		$(this).append($('<img src="'+starArray[index]+'"/>'));
	});
});
