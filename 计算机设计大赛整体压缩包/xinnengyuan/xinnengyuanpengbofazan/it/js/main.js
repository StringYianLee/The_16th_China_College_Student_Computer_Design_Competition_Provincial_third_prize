(function ($) {
  "use strict";
    //¸ü¶àÏÂÔØ£ºhttp://www.bootstrapmb.com
  // Mobile-menu
  $('.main-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "767",
    onePage: false,
});

/*---------------------------------------------------------------------------------------
    Side-bar Active
-----------------------------------------------------------------------------------------*/
$('.bar').on("click", function() {
  $('.btn-menu-main').addClass('btn-menu-main-right');
});
$('.crose').on("click", function() {
  $('.btn-menu-main').removeClass('btn-menu-main-right');
});

//     Data Background Active
  // -----------------------------------------------------------------------------------------*/
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });


  // Pre Loader js start
  $(window).on('load', function () {
    $('.pre_loader').delay(200).fadeOut();
  });


  $(window).on('scroll', function () {
    var abc = $(this).scrollTop();

    if (abc > 150) {
      $('.bck_to_top').fadeIn();
    } else {
      $('.bck_to_top').fadeOut();
    }
  });



// Menu Nav
function smoothSctollTop() {
  $('.main-menu ul li > a').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top - 80
          }, 1000);
      }
  });
  }
  smoothSctollTop();


  /*---------------------------------------------------------------------------------------
  /*---------------------------------------------------------------------------------------
      Sticky Header Active
  -----------------------------------------------------------------------------------------*/
  // menu active class

  $('.main_menu ul li:first-child > a').addClass('active');



  //for menu active class

  $('.main-menu ul li > a').on('click', function () {
    $('.sub_menu li a').removeClass("active");
    $(this).addClass("active");
  });



  // scroll

  $(window).on('scroll', function () {

    var scroll = $(window).scrollTop();

    if (scroll < 245) {

      $(".header-sticky").removeClass("sticky");

    } else {

      $(".header-sticky").addClass("sticky");

    }

  });



  // sticky Header layout 1
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });
  // sticky Header layout 2, 3
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 5) {
      $(".header-sticky-2").removeClass("sticky2");
    } else {
      $(".header-sticky-2").addClass("sticky2");
    }
  });
  // sticky Header Inner page
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 5) {
      $("#header-sticky-3").removeClass("sticky");
    } else {
      $("#header-sticky-3").addClass("sticky");
    }
  });

  // scroll

  $(window).on('scroll', function () {

    var scroll = $(window).scrollTop();

    if (scroll < 245) {

      $(".header-sticky").removeClass("sticky");

    } else {

      $(".header-sticky").addClass("sticky");

    }

  });
  $(window).on('scroll', function () {

    var scroll = $(window).scrollTop();

    if (scroll < 245) {

      $(".header-sticky-2").removeClass("sticky-2");

    } else {

      $(".header-sticky-2").addClass("sticky-2");

    }

  });
  /*---------------------------------------------------------------------------------------
      Full Screen Search Popup Active
  -----------------------------------------------------------------------------------------*/
  // search popup
  if ($('.popup-with-zoom-anim').length) {
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
  }
  

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });
  /*---------------------------------------------------------------------------------------
      Slick Slider Active
  -----------------------------------------------------------------------------------------*/
  // mainSlider
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      pauseOnHover: false,
      prevArrow: '<i class="fas fa-chevron-left"></i>',
      nextArrow: '<i class="fas fa-chevron-right"></i>',
      responsive: [{
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  /* project-active */
  $('.protfolio-active').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    fade: false,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /* testimomial_active */
  $('.testimonial-active').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
    fade: false,
    arrows: false,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // brand_active

  $('.brand-active').slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    fade: false,
    arrows: false,
    prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /*---------------------------------------------------------------------------------------
      Side-bar Active
  -----------------------------------------------------------------------------------------*/
  $('.bar').on("click", function () {
    $('.btn-menu-main').addClass('btn-menu-main-right');
  });
  $('.crose').on("click", function () {
    $('.btn-menu-main').removeClass('btn-menu-main-right');
  });


  /* magnificPopup img view */
  $('.venobox').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  $('.popup-video').magnificPopup({
    type: 'iframe',
  });
  /*---------------------------------------------------------------------------------------
      Isotope Filter Active
  -----------------------------------------------------------------------------------------*/
  // isotop
  $('.grid').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

  });

  //   counter-area
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });


  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });



  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // WOW active
  new WOW().init();

})
(jQuery);