/* 

var number, imageMargin;
var firstImage =  $(".m-collage__image").first();
var lastImage = $(".m-collage__image").last();

$( ".m-collage__image" ).each(function( index ) {
	
	$(this).css('margin-top', function() {
		
		number = 1 + Math.floor(Math.random() * $(this).height() * 1.1);
		imageMargin = number + (index * 100);
		return imageMargin;
		
		});

});

$(".m-collage").css('height', function() {
	$(firstImage).position();
	$(lastImage).position();
	return false;
});

*/