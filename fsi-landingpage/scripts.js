// --- SWUP TRANSITIONS --- //
$(document).ready(function () {

    // -- MENU MOBILE --//
    $("#btn-menu").click(function () {
        $("#menu").toggleClass("open");
        $("#btn-menu").toggleClass("open");
    });
    $("#btn-close").click(function () {
        $("#menu").toggleClass("open");
    });
    $(window).scroll(function () {
        var x = $(this).scrollTop();
        $("#header img").css("-webkit-transform", "translateY(" + (x / 1.25) + "px)");
        $(".parallax-2").css("-webkit-transform", "translateY(" + (x / 5) + "px)");
    });

    $("#menu-slide a").click(function () {
        $("#menu-slide").toggleClass("open");
        $(".btn-menu").toggleClass("btn-close");
    });

    // -- ADD CLASS ON SCROLL --//
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 25) {
            $("#site-header").addClass("scroll");
        } else {
            $("#site-header").removeClass("scroll");
        }
    });

    // -- SLIDER --//
    $('.quotes').slick({
        infinite: true,
        speed: 1250,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        fade: false,
        lazyLoad: 'ondemand',
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        appendDots: $('#dots')
    });
});

document.addEventListener('swup:contentReplaced', function () {
    $('.quotes').slick({
        infinite: true,
        speed: 1250,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        fade: false,
        lazyLoad: 'ondemand',
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        appendDots: $('#dots')
    });
    // -- MENU MOBILE --//
    $("#btn-menu").click(function () {
        $("#menu").toggleClass("open");
        $("#btn-menu").toggleClass("open");
    });
    $("#btn-close").click(function () {
        $("#menu").toggleClass("open");
    });
});

// -- ANIMATE INTO VIEW -- //
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".animate-in")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
        }
    }
})

function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
}
$(window).scroll(function () {
    var scrolled = $(window).scrollTop()
    $('.bkg-parallax').each(function (index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY = initY + $(this).height()

        // Check if the element is in the viewport.
        var visible = isInViewport(this)
        if (visible) {
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px')
        }
    })
})