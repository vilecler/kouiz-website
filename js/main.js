(function($) {
    $(window).on('load', function(event) {
        $('#loader').fadeOut();
    });
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });
    $('.page-scroll').click(function() {
        var hash = this.hash;
        var position = $(hash).offset().top - 60;
        $('html').animate({
            scrollTop: position
        }, 900);
    });
    var scrollLink = $('.page-scroll');
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    $('.counter').counterUp({
        time: 1000
    });
    $('#themes').mixItUp();
    $('.lightbox').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
    });
    $(".back-to-top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    new WOW().init();
}(jQuery));
