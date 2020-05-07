$(document).ready(function() {
	//if ($(window).width() <= 576) {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		// Code to run if mobile
	} else {
		// Hide the blocks on page load to make them appear after
		$("#block1__photo, #block1__elements, #block1__elements, #block2__text, #block2__photo, #block3__text, #block3__photo, #button-more").css("opacity", "0");

		// #block1 animation
		$("#block1__photo").waypoint(function() {
			$("#block1__photo").addClass("zoomIn").css("opacity", "1");
		}, {
			offset: "60%"
		});
    $("#block1__elements").waypoint(function() {
			$("#block1__elements").addClass("zoomIn").css("opacity", "1");
		}, {
			offset: "70%"
		});
    // Animation of the mark
    $(".mark-block").waypoint(function() {
			$(".mark-block").addClass("active");
		}, {
			offset: "80%"
		});

		// #block2 animation
		$("#block2__text").waypoint(function() {
			$("#block2__text").addClass("fadeInUp");
		}, {
			offset: "60%"
		});
		$("#block2__photo").waypoint(function() {
			$("#block2__photo").addClass("fadeInUp");
		}, {
			offset: "60%"
		});

		// #block3 animation
		$("#block3__text").waypoint(function() {
			$("#block3__text").addClass("fadeInUp");
		}, {
			offset: "60%"
		});
		$("#block3__photo").waypoint(function() {
			$("#block3__photo").addClass("fadeInUp");
		}, {
			offset: "60%"
		});

		$("#button-more").waypoint(function()  {
			$("#button-more").addClass("fadeInUp");
		},   {
			offset: "100%"
		});

		$("#footer-by").waypoint(function()  {
			$("#footer-by").addClass("fadeInUp");
		},   {
			offset: "100%"
		});
	}

});
