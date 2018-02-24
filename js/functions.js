jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});
	
	
	//Initiat WOW JS
	new WOW().init();
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
	
	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
	        var triggerGA = false;
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			
			if(triggerGA){
			   gtag('event', 'click', {
			        'event_category': 'Portfolio',
				'event_label': $(this).html()
			       });
			}
			triggerGA = true;
			return false;
		});
		
		$('.portfolio-filter .active').click();
	});
	
	$('.text').click(function() {
	  trackGAEvent( 'Portfolio', $(this).parent().parent().find('.mainimage').data('fancybox'));
	  $(this).parent().parent().find('.mainimage').click();
   });
    
   //Portfolio
   $('.portfolio-item .recent-work-wrap img').click( 
	function(event){ 
        trackGAEvent('Portfolio' , $(event.target).parent().data('fancybox'));
   });	

   //GA Tracking
   function trackGAEvent( category, item){
       if (typeof item === "undefined") {		
	 return;
       }

	gtag('event', 'play', {
	  'event_category': category,
	  'event_label': item
	});
    }
	
    //Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
});
