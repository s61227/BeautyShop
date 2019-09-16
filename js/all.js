$(document).ready(function () {
    //owl-carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
            '<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'
        ]
    });

    //js-collapsible
    $(".js-collapsible > a").on("click", function () {
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            $(this).siblings('.js-collapsible__content').slideUp(300);
            $(".js-collapsible > a i").removeClass("fa-angle-up").addClass("fa-angle-down");
        } else {
            $(".js-collapsible > a i").removeClass("fa-angle-up").addClass("fa-angle-down");
            $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
            $(".js-collapsible > a").removeClass("js-active");
            $(this).addClass("js-active");
            $('.js-collapsible__content').slideUp(300);
            $(this).siblings('.js-collapsible__content').slideDown(300);
        }
    });

    //dropdown
    $(".js-dropdown").hover(function(){
        $(this).children(".js-dropdown__menu").show();
      },
      function(){
        $(this).children(".js-dropdown__menu").hide();
    });

    //mobile menu
    $( ".js-mobileBtn" ).click(function() {
        $(".js-mobileMenu").css( "display", "block" );
        $(".js-closeBtn").css( "display", "inline-block" );
        $(".l-overlay").css( "display", "block");
        $("html").addClass("js-active");
    });
    $( ".js-closeBtn" ).click(function() {
        $(".js-mobileMenu").css( "display", "none" );
        $(".l-close").css( "display", "none" );
        $(".l-overlay").css( "display", "none" );
        $("html").removeClass("js-active");
    });
});
