/* Author: 

*/
$(document).ready(function(){

	$(".btn-slide").click(function(){
		$(".panel").slideToggle("slow");
		$(".panel2").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});

});























