/* Theme Scripts */

(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    /*=========================================================================
    	Sticky Header
    =========================================================================*/
    function headerHeight() {
        var height = $("#header").height();
        $('.header-height').css('height', height + 'px');
    }

    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        headerHeight();
        $(window).resize(headerHeight);
        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top animated slideInDown");
            } else {
                header.removeClass("navbar-fixed-top animated slideInDown");
            }

            // Scroll to Top
            var ScrollTop = $('#scroll-to-top');
            if ($(this).scrollTop() > 100) {
                ScrollTop.fadeIn();
            } else {
                ScrollTop.fadeOut();
            }
        });
    });

    /*=========================================================================
    	Main Slider
    =========================================================================*/
    $('#main-slider').on('init', function (e, slick) {
        var $firstAnimatingElements = $('div.single-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });

    $('#main-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    $('#main-slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        fade: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
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

    /*=========================================================================
        Button Effect
    =========================================================================*/
    $('.default-btn').on('mouseenter', function (e) {

        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;

        $(this).find('span').css({
            top: relY,
            left: relX
        });

    }).on('mouseout', function (e) {

        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;

        $(this).find('span').css({
            top: relY,
            left: relX
        });

    });

    /*=========================================================================
        Mobile Menu
    =========================================================================*/
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });

    /*=========================================================================
        Product Carousel
    =========================================================================*/
    var productCarousel = $('#product-carousel');
    productCarousel.owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 4,
            }
        }
    });

    /*=========================================================================
        Shop Single Carousel
    =========================================================================*/
    var shopSingle = $('.shop-single-carousel');
    shopSingle.owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            }
        }
    });

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    var testiCarousel = $('#testimonial-carousel');
    testiCarousel.owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        autoplay: false,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    /*=========================================================================
        Isotope Active
    =========================================================================*/
    var productItems = $('.product-items');
    productItems.imagesLoaded(function () {

        // Add isotope click function
        $('.product-filter li').on('click', function () {
            $(".product-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            productItems.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        productItems.isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });

    });

    /*=========================================================================
        Sponsor Carousel
    =========================================================================*/
    var sponsorCarousel = $('.sponsor-carousel');
    sponsorCarousel.owlCarousel({
        loop: true,
        margin: 5,
        center: false,
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 6,
            }
        }
    });

    /*=========================================================================
    	Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
    	WOW Active
    =========================================================================*/
    new WOW().init();

    /*=========================================================================
        Active venobox
    =========================================================================*/
    var venoboxActive = $('.img-popup');
    venoboxActive.venobox({
        numeratio: true,
        infinigall: true
    });

    /*=========================================================================
    	CurrentYear
    =========================================================================*/
    var currentYear = new Date().getFullYear();
    $('#currentYear').append(currentYear);

    /*=========================================================================
    	MailChimp
    =========================================================================*/
    if ($('.subscribe_form').length > 0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if (resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

})(jQuery);
