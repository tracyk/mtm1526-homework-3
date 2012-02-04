// JavaScript Document

$(document).ready(function (ev) {
	
	$('#form').submit(function(ev) {
		ev.preventDefault();
		if ($('#menu option:selected').val() == "border") {   // if selected option is equal to border
			$('#tiara').css("border-color", $('#change').val());
			//alert($('#change').val());
		}
		if ($('#menu option:selected').val() == "background") {
			$('#tiara').css("background-color", $('#change').val());
			
		}
		if ($('#menu option:selected').val() == "color") {
			$('#tiara').css("color", $('#change').val());
			
		}
	});
	
	$('#there').click(function(ev) {
		ev.preventDefault();
		$('#tiara').toggle(2000); <!-- OK so I added the 2000 because it looked super cool -->
	});
  
});