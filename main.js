var app = app || {};

app.nav = (function(){
	var opened =  false,
		hidden =  true
		header =  $('#header')
		nav =     $('#nav')
		doc =     $(document);
	return {
		move: function(){
			if (opened) {
				opened = false;
				$('#about-n').animate({left: '-=70px'})
				$('#project-n').animate({left: '-=70px', top: '-=70px'})
				$('#contact-n').animate({top: '-=70px'})
			}else {
				opened = true;
				$('#about-n').animate({left: '+=70px'})
				$('#project-n').animate({left: '+=70px', top: '+=70px'})
				$('#contact-n').animate({top: '+=70px'})
			}
		},
		fade: function(){
			if ( hidden && doc.scrollTop() >= header.height()){
				hidden = false;
				console.log(hidden);
				nav.fadeIn("slow");
				console.log('going down');
			}
			if ( !hidden && doc.scrollTop() <= header.height()){
				console.log(hidden);
				hidden = true
				nav.fadeOut("fast");
				console.log('going up')
			}
		},
		scroll_to: function(){
			
		}

	}

})();

console.log(app.nav);

( function($){
	$('#burger').on('click', app.nav.move);
	$(document).scroll(app.nav.fade);
})(jQuery);