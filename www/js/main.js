$(function() {
    "use strict";

    $('.sub-nav-toggle').on('click', function(e) {
        e.preventDefault();
        var $subNav = $(this).next('.sub-nav');
        var $othernav = $(this).parents().find('.sub-nav');
        if ($subNav.hasClass('hidden')) {
            $othernav.slideUp(420, function() {
                $(this).addClass('hidden');
            });
            $subNav.hide().removeClass('hidden').stop().slideDown(420);
        } else {
            $subNav.stop().slideUp(420, function() {
                $(this).addClass('hidden');
            });
        }
    });
    $('#menu-button, #menu-close-button').on('click touchend', function(e) {
        e.preventDefault();

        $('body').toggleClass('pushed-left');
        $('#menu-button').toggleClass('open');

    });
    $('#content, #background-color, #logo').on('click touchend', function(e) {
        var $body = $('body');
        var $target = $(e.target);
        if (($body.hasClass('pushed-left-alt') || $body.hasClass('pushed-left')) && $target.closest('#main-nav').length === 0 && $target.closest('#menu-button').length === 0) {
            e.preventDefault();
            $body.removeClass('pushed-left-alt').removeClass('pushed-left');
            $('#menu-button').removeClass('open');
        }
    });


    // Banner-textblock animation on scroll
    if ($('.banner-textblock').length) {
        $(window).scroll(function() {
            var scrollPos = $(this).scrollTop();
            //alert(scrollPos);
            $('.banner-textblock').css({
                'top': (-(scrollPos / 4.5)) + "px",
                'opacity': 1 - (scrollPos / 550)
            });
        });
    }


    // Animatedblock
    var $animation_elements = $('.animatedblock');

    function check_if_in_view() {
        var window_height = $(window).height();
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                //  $element.removeClass('in-view');
            }
        });
    }

    $(window).on('scroll resize', check_if_in_view);
    $(window).trigger('scroll');

});