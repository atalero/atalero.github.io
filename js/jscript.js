$(document).ready(function(){
			$(".item1").click(function() {
					$('html,body').animate({
							scrollTop: $(".about-me").offset().top},
							'slow');
			});

			$(".item2").click(function() {
					$('html,body').animate({
							scrollTop: $(".my-projects").offset().top},
							'slow');
			});
	
			$(".item4").click(function() {
					$('html,body').animate({
							scrollTop: $(".back-end").offset().top},
							'slow');
			});

			$(".item3").click(function() {
					$('html,body').animate({
							scrollTop: $(".contact-me").offset().top},
							'slow');
			});
	
			$(".item5").click(function() {
					$('html,body').animate({
							scrollTop: $(".certificates").offset().top},
							'slow');
			});
});
