$('figure.effect-duke').css( 'height', function(halfwidth) {
	halfwidth = $('body').width() / 2;
	return halfwidth * 210 / 512;
});


if ($(window).width() <= 480){	
		$('section.main').css( 'min-height', function(frontheight) {
		frontheight = $(window).innerHeight() - ( 2 * $('figure.effect-duke').outerHeight());
		return frontheight;
	});
	} else {
	$('section.main').css( 'min-height', function(frontheight) {
	frontheight = $(window).innerHeight() - $('figure.effect-duke').outerHeight();
	return frontheight;
	});
}



$(window).resize(function (){
	$('figure.effect-duke').css( 'height', function(halfwidth) {
		halfwidth = $('body').width() / 2;
		return halfwidth * 210 / 512;
	});
	
	if ($(window).width() <= 480){	
		$('section.main').css( 'min-height', function(frontheight) {
		frontheight = $(window).innerHeight() - ( 2 * $('figure.effect-duke').outerHeight());
		return frontheight;
		});
	} else {
		$('section.main').css( 'min-height', function(frontheight) {
		frontheight = $(window).innerHeight() - $('figure.effect-duke').outerHeight();
		return frontheight;
		});
	}
});