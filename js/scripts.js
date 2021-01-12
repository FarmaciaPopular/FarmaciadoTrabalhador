/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

  // Contato Whatsapp
function wpp () {
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá, tenho interesse em comprar um produto.`)
}
function wppproduto1(){
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá tenho interesse no Dipirona 20 ml em promoção por R$ 2,99`)
  
}
function wppproduto2(){
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá tenho interesse no Dorflex em promoção por R$ 4,99`)
  
}
function wppproduto3(){
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá tenho interesse no Xarope Expec em promoção por R$ 9,99`)
  
}
function wppproduto4(){
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá tenho interesse no Desodorante Aerosol Dove em promoção por R$ 9,99`)
  
}
function wppproduto5(){
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá tenho interesse no Creme Nivea em promoção por R$ 12,99`)
  
}
function wppproduto6(){
  window.open(`https://${screen.width < 800 ? 'api' : 'web'}.whatsapp.com/send?phone=5561996711616&text=Olá tenho interesse na Fralda Jumbinho Capricho em promoção por R$ 9,99`)
  
}

