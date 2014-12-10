$(document).ready(function() {
   
	$('figure.effect-duke').css( 'height', function(halfwidth) {
		halfwidth = $('body').width() / 2;
		return halfwidth * 210 / 700; //512
	});
	
	
	if ($(window).width() <= 480){	
			$('#hero').css( 'min-height', function(frontheight) {
			frontheight = $(window).innerHeight() - ( 2 * $('figure.effect-duke').outerHeight());
			return frontheight;
		});
		} else {
		$('#hero').css( 'min-height', function(frontheight) {
		frontheight = $(window).innerHeight() - $('figure.effect-duke').outerHeight();
		return frontheight;
		});
	}
	
	
	
	$(window).resize(function (){
		$('figure.effect-duke').css( 'height', function(halfwidth) {
			halfwidth = $('body').width() / 2;
			return halfwidth * 210 / 700;
		});
		
		if ($(window).width() <= 480){	
			$('#hero').css( 'min-height', function(frontheight) {
			frontheight = $(window).innerHeight() - ( 2 * $('figure.effect-duke').outerHeight());
			return frontheight;
			});
		} else {
			$('#hero').css( 'min-height', function(frontheight) {
			frontheight = $(window).innerHeight() - $('figure.effect-duke').outerHeight();
			return frontheight;
			});
		}
	});
	
	
// 	$('img').baseline(24);
	
/*
	$('figcaption a').click(function(){
									  
		var hash = window.location.hash.substr(1);
		var href = $('#nav li a').each(function(){
			href = $(this).attr('href');
			if(hash===href.substr(0,href.length-5)){
				var toLoad = hash+'.html #content';
				$('#content').load(toLoad);
			}											
		});
		var toLoad = $(this).attr('href')+' #content';
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent());
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		return false;	
	});
*/
});