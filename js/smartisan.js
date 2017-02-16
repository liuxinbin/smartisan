//hover3d
$(function() {
	$(".bg,.bg1").mouseenter(function() {
		var thisPX = $(this).offset().left;
		var thisPY = $(this).offset().top;
		var boxWidth = $(this).outerWidth();
		var boxHeight = $(this).outerHeight();
		$(this).addClass("threeD");
		$(".threeD").mousemove(function(event) {
			var mouseX = event.pageX - thisPX;
			var mouseY = event.pageY - thisPY;
			var X;
			var Y;
			if(mouseX > boxWidth / 2) {
				X = mouseX - boxWidth / 2;
			} else {
				X = mouseX - boxWidth / 2;
			}
			if(mouseY > boxHeight / 2) {
				Y = boxHeight / 2 - mouseY;
			} else {
				Y = boxHeight / 2 - mouseY;
			}
			$(".threeD").css({
				"-webkit-transform": "rotateY(" + X / 100 + "deg) " + "rotateX(" + Y / 100 + "deg)"
			});
		});
	});
	$(".bg,.bg1").mouseleave(function() {
		$(this).removeClass("threeD");
		$(this).css({
			"-webkit-transform": "rotateY(0deg) rotateX(0deg)"
		});
	});
});