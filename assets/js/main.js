$(document).ready(function(){
		$('.header-slide-carousel').owlCarousel({
		loop:true,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
		items:1,
		autoplay:true,
	})
	
	// Magnific-Popup Video Active
	$('#youtue-video').magnificPopup({
		type:'iframe',
			iframe: {

			  patterns: {
				youtube: {
				  index: 'youtube.com/', 

				  src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
				},

			  },

			  srcAction: 'iframe_src',
			}
		});
	
});
	