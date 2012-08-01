// JavaScript Document
// jQuery fancybox

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#nav-about").fancybox({ 
		'overlayShow'	:	true,
		'titleShow'     :   true,
		'titlePosition' :   'over',
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade'
	});
	
	$("a#nav-government").fancybox({
		'titlePosition' :   'over'
	});
	
	$("a.education").fancybox({
		'speedIn'		:	1000, 
		'speedOut'		:	600, 
		'overlayShow'	:	true,
		'titlePosition' :   'over'
	});
	
	$("a#thumbnails").fancybox({
		'hideOnContentClick': true
	});
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.technology").fancybox({
		'speedIn'		:	1000, 
		'speedOut'		:	600, 
		'overlayShow'	:	true,
		'titlePosition' :   'over'
	});
	
});
