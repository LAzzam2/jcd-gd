'use strict';
document.addEventListener("DOMContentLoaded", function(event) { 

    var totes = $('.tote');
    console.log(totes);
    $.each( totes, function( key, value ) {
      var number = 1 + Math.floor(Math.random() * 6);  
        $(value).css({
            'margin-top': -(number*15)+"px",
            transition: '0s',
            opacity: 0
        })
    });

        setTimeout(function(){

        totes.css({
            'margin-top': '',
            transition: '',
            opacity: ''
        })
    },250)

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

    $(document).on('click','.totes-inactive>.totes>.tote',function(){
        openTote();
    });
    $('.learn-more-btn').on('click', function(){
        openTote();
    });

    $(document).keyup(function(e){
        if(e.keyCode === 27)
        closeTotes();
    });
    $('.bgImg, .dialog').on('click', function(){
        closeTotes();
    });

    $('.totes, .bottomTrigger').hover(function(){
        $('.totes').addClass('breath');
        // $('.main').css({
        //     opacity: '.8',
        //     '-webkit-transform': 'scale(.95) translate(0%,-50%)',
        // });
    },function(){
        $('.totes').removeClass('breath');
        // $('.main').css({
        //     opacity: '1',
        //     '-webkit-transform': 'scale(1) translate(0%,-50%)',
        // });
    });

    function openTote(){
        $('.hero').addClass('totes-active');
        $('.hero').removeClass('totes-inactive');
    };
    function closeTotes(){
        $('.hero').removeClass('totes-active');
        $('#totes').addClass('animating');
        var totes = $('#totes');
        totes.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
        function(e) {
            totes.removeClass('animating');
            $('.hero').addClass('totes-inactive');
        });
    }

});
