// JavaScript Document
$(document).ready(function(){
	
	$("h1").click(function(){
		if($("h1").attr("class")=="in"){
		$("h1").removeClass("in");}else{
			$("h1").addClass("in");
		}
	})
});