$(document).ready(function(){
		$('#menu-first').click(function(){
			$('html,body').stop();
			$('html,body').animate({
				scrollTop:$('.content1').offset().top
			},1000)
		});
		$('#menu-second').click(function(){
			$('html,body').stop();
			$('html,body').animate({
				scrollTop:$('.content2').offset().top
			},1000)
		});
		$('#icon-next').click(function(){
			$('html,body').animate({
				scrollTop:$('.content2').offset().top
			},1000)
		});
		$('#menu-third').click(function(){
			$('html,body').stop();
			$('html,body').animate({
				scrollTop:$('.content3').offset().top
			},1000)
		});
		$('#menu-fourth').click(function(){
			$('html,body').stop();
			$('html,body').animate({
				scrollTop:$('.content4').offset().top
			},1000)
		});
		$('#menu-fifth').click(function(){
			$('html,body').stop();
			$('html,body').animate({
				scrollTop:$('.content5').offset().top
			},1000)
		});
			var a = "\
		\n               #   ___          _   _                      |          \
		\n    ,,,,,      #  <_*_>        '\\\\-//`        ()_()        |.===.     \
		\n   /(o o)\\     #  (o o)         (o o)         (o o)        {}o o{}    \
		\nooO--(_)--Ooo--8---(_)--Ooo-ooO--(_)--Ooo-ooO--`o'--Ooo-ooO--(_)--Ooo-contact-me";
			console.info(a);
	})