'use strict';
document.addEventListener("DOMContentLoaded", function(event) { 

	$('.mobile').slick({
  		infinite: true,
        centerMode: false,
        arrows: false,
        variableWidth: true
	}
	);

    $('.learn-more-btn').hover(function(){
        $('.totes').addClass('hover');
    },function(){
        $('.totes').removeClass('hover');
        $('#totes').addClass('animating');
        var totes = $('#totes');
        totes.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        function(e) {
           totes.removeClass('animating');
        });
    });

    $('.learn-more-btn').on('click', function(){
        $('.hero').addClass('totes-active');
    });

    $(document).keyup(function(e){
        if(e.keyCode === 27)
        closeTotes();
    });
    $('.bgImg').on('click', function(){
        closeTotes();
    });

    $('.totes').hover(function(){
        $('.main').css({
            opacity: '.1',
            '-webkit-transform': 'scale(.95) translate(0%,-50%)',
        });
    },function(){
        $('.main').css({
            opacity: '1',
            '-webkit-transform': 'scale(1) translate(0%,-50%)',
        });
    });

    function closeTotes(){
        $('.hero').removeClass('totes-active');
        $('#totes').addClass('animating');
        var totes = $('#totes');
        totes.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        function(e) {
           totes.removeClass('animating');
        });
    }

});
