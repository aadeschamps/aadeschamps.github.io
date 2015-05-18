var app = app || {};

app.nav = (function(){
	var opened =  false,
		hidden =  true
		header =  $('#header')
		nav =     $('#nav')
		doc =     $(document);
	return {
		move: function(){
			if(open){
				$('#nav').removeClass('inactive');
				$('#nav').addClass('active');
				open = false;
			}else{
				$('#nav').removeClass('active');
				$('#nav').addClass('inactive');
				open = true;
			}
		},
		fade: function(){
			if ( hidden && doc.scrollTop() >= header.height()){
				hidden = false;
				console.log(hidden);
				nav.removeClass('out');
				nav.addClass('in');
				// nav.fadeIn("slow");
			}
			if ( !hidden && doc.scrollTop() <= header.height()){
				console.log(hidden);
				hidden = true
				nav.removeClass('in');
				nav.addClass('out');
				$('#nav').removeClass('active');
				$('#nav').addClass('inactive');
				open = true;
				// nav.fadeOut("fast");
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