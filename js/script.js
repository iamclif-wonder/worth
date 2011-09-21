/*
$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".toggle_container").hide(); 

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$(".trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});

});
*/

$(function() {
      $('toggle_container').hide();
      $('.power').click(function() { // When an item is clicked
            var id = $(this).attr('rel'); // Retrieve its content ID
            var showing = $(id).is(':visible'); // Remember if that content was already visible
            $('div.hidable').slideUp('slow'); // Hide them all
            $('.power').removeClass('active'); // Mark all as inactive
            if (!showing) { // If it wasn't visible
                  $(id).slideDown('fast'); // Show it
                  $(this).addClass('active'); // Mark link as active
            }
      });
});























