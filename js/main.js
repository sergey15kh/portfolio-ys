$(function () {
    //florensi slider owl-carousel
    $('.project-pages_slider .owl-carousel').owlCarousel({
          loop:true,
          margin:100,
          nav:true,
          dots:false,
          navText: ['<img src="./images/icon_arrow-left.svg" alt="">', '<img src="./images/icon_arrow-right.svg" alt="">'],
          smartSpeed:600,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:1.25
              }
          }
      });
    // florensi slider margin-left on half layout width
    let layoutWidth = $('.layout').outerWidth();
    let screenWidth = $('html, body').outerWidth();
    let marginWidth = screenWidth - layoutWidth;
    let halfMarginWidth = marginWidth / 2;
    $('.project-pages_slider .layout').css('width', screenWidth );
    $('.project-pages_slider .layout').css('margin-left', halfMarginWidth );
});
  

$(function () {
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        verticalCentered: false,
        scrollingSpeed: 950,
        loopBottom: true,
		loopTop: true,
    });
    
    //methods
    fullpage_api.setAllowScrolling(true);
});


// Burger Menu
$(function () {
    $('.header-burger').click(function(event){
        $('.header-burger__menu,.burger-line-top,.burger-line-center,.burger-line-bottom').toggleClass('active');
    });
});
