$(function () {
    $('body').append(' <div class="galleryShadow indexgallery"></div> <div class="galleryModal indexgalleryModal"> <i class="galleryIcon gIquit fas fa-times-circle"></i> <i class="galleryIcon gIleft fas fa-chevron-left"></i> <i class="galleryIcon gIright fas fa-chevron-right"></i> <div class="galleryContainer"> <img src=""> </div>   </div> ')
    InItGallaryView();
})

function InItGallaryView() {

    $('.gIquit').click(function () {
        $('.galleryModal').css({ 'transform': 'scale(0)' })
        $('#header').removeClass("z-ind")
        $('footer').removeClass("z-ind")
        $('.galleryShadow').fadeOut()

    })

    $('.gallery').on('click', '.galleryItem', function () {
        galleryNavigate($(this), 'opened')
        $('.galleryModal').css({ 'transform': 'scale(1)' })
        $('#header').addClass("z-ind")
        $('footer').addClass("z-ind")
        $('.galleryShadow').fadeIn()

    })
    let galleryNav
    let galleryNew
    let galleryNewImg
    let galleryNewText
    $('.gIleft').click(function () {
        galleryNew = $(galleryNav).prev()
        if (galleryNew.length == 0) {
            galleryNew = $(galleryNav).siblings(":last");
        }
        galleryNavigate(galleryNew, 'last')
    })
    $('.gIright').click(function () {
        galleryNew = $(galleryNav).next()
        if (galleryNew.length == 0) {
            galleryNew = $(galleryNav).siblings(":first");
        }
        galleryNavigate(galleryNew, 'first')
    })
    function galleryNavigate(gData, direction) {
        galleryNewImg = gData.children('img').attr('src')
        if (typeof galleryNewImg !== "undefined") {
            galleryNav = gData
            $('.galleryModal img').attr('src', galleryNewImg)
        }
        else {
            gData = $('.galleryItem:' + direction)
            galleryNav = gData
            galleryNewImg = gData.children('img').attr('src')
            $('.galleryModal img').attr('src', galleryNewImg)
        }
        galleryNewText = gData.children('img').attr('data-text')
        if (typeof galleryNewText !== "undefined") {
            $('.galleryModal .galleryContainer .galleryText').remove()
            $('.galleryModal .galleryContainer').append('<div class="galleryText">' + galleryNewText + '</div>')
        }
        else {
            $('.galleryModal .galleryContainer .galleryText').remove()
        }
    }
}