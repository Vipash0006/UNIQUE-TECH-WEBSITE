"use strict";


jQuery(document).ready(function ($) {
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

   
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
	

	
	
	var windowWidth = $(window).width();
    if (windowWidth > 757) {

        
          
            $(window).scroll(function () {
                if ($(this).scrollTop() >200) {
                    $('.navbar').fadeIn(200);
                    $('.navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }
            });
        
    }
		$('#bs-example-navbar-collapse-1').localScroll();
		
	
		$(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
		});
		
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 },1000);
			return false;
		});
		
	


    

		$.localScroll();



    



});
