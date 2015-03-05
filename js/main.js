/*-------------------------------------------------------------------------*/
/*  Setup WOW Animations
/*-------------------------------------------------------------------------*/

$(window).load(function() {
	//wow animations
	var wow = new WOW({
	  	offset:0,
	  	mobile:false
		});
	wow.init();
});

/*-------------------------------------------------------------------------*/
/*  Scrollee
/*-------------------------------------------------------------------------*/

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
	});
});