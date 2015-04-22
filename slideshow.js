
$(document).ready(function(){

    // The canvas manipulations of the images are CPU intensive,
    // this is why we are using setTimeout to make them asynchronous
    // and improve the responsiveness of the page.

    var slideshow_index = {},
		slideshows = {};

	$('div.slideshow').each(function(){
		id = $(this).attr('id');
		slideshow_index[id] = 0;
		slideshows[id] = $(this).find('li');
		}
	);

    setTimeout(function(){

        $('.slide_arrow').click(function(){
            var nextIndex    = 0;
			
			slideshow_id = $(this).parent().attr('id');
			var current = slideshow_index[slideshow_id];
			var slides = slideshows[slideshow_id];

            // Depending on whether this is the next or previous
            // arrow, calculate the index of the next slide accordingly.

            if($(this).hasClass('next')){
                nextIndex = current >= slides.length-1 ? 0 : current+1;
            }
            else {
                nextIndex = current <= 0 ? slides.length-1 : current-1;
            }

			var current_slide = slides.eq(current);
            var next = slides.eq(nextIndex);

			slideshow_index[slideshow_id] = nextIndex;
			next.addClass('slideActive').show();
			current_slide.removeClass('slideActive').hide();
        });

    },100);
})
