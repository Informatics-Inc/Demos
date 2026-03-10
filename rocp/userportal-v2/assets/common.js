
// for adjusting auto height of Ard Grid
function GridCreated(sender, args) {
    $('.rgDataDiv').removeAttr('style');
    $('.rgDataDiv').attr('style', 'overflow-x: scroll;');
}
$(window).resize(function () {
    var footerHeight = $('footer').height();
    var headerHeight = $('#header').height() - 60;
    $('#display').attr('style', 'padding-bottom: ' + footerHeight + 'px;' + 'padding-top: ' + headerHeight + 'px;');
});
$(document).ready(function () {
    var footerHeight = $('footer').height();
    var headerHeight = $('#header').height() - 60;
    $('#display').attr('style', 'padding-bottom: ' + footerHeight + 'px;' + 'padding-top: ' + headerHeight + 'px;');
});