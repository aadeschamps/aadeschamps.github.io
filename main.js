

( function($){
	var hidden = true;
	var header = $('#header');
	var nav = $('#nav');
	var doc = $(document);
	console.log(header.height());
	doc.scroll(function(){
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
	})
	
	

})(jQuery);


( function($){
	var clicked = false;
	$('#burger').on('click', function(){
		if (clicked) {
			clicked = false;
			$('#about-n').animate({left: '-=70px'})
			$('#project-n').animate({left: '-=70px', top: '-=70px'})
			$('#contact-n').animate({top: '-=70px'})
			%('.bar:first-child').animate({})
		}else {
			clicked = true;
			$('#about-n').animate({left: '+=70px'})
			$('#project-n').animate({left: '+=70px', top: '+=70px'})
			$('#contact-n').animate({top: '+=70px'})
		}
	})
})(jQuery);