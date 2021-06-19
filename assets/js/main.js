(function($) {
var windowWidth = $(window).width();
	

//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};

/*
------------------ 
 Menu Js
------------------
*/
if (windowWidth <= 767) {
  $('.hambergar-icon').on('click', function(e){
    $('.main-nav').slideToggle(500);
    $(this).toggleClass('cross-icon');
  });

  $('li.menu-item-has-children > a').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('sub-menu-arrow');
    $(this).next().slideToggle(300);

  });
}


$('.contact-form-submit button').on('click', function(){
  $('.contact-form-req').addClass('wpforms-has-error');
});

$('.wpforms-error').on('click', function(){
  $(this).parents('.contact-form-req').removeClass('wpforms-has-error');
});


if (windowWidth <= 767){
if( $('.our-service-slider').length ){
    $('.our-service-slider').slick({
      dots: true,
      arrows:false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]      
    });
}
}



    new WOW().init();

})(jQuery);