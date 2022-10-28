function linkDelay (URL) {
    setTimeout( function() {window.location = URL}, 1500);
    $('.cont').animate({
        opacity: 0}, 1000, () => {
            $('#parapap').remove();
            $('.navBar').animate({
                opacity: 1}, 500)
            }
        )
}
function fadeOut (URL) {
    setTimeout( function() {window.location = URL}, 1000);
    $('.contant').animate({
        opacity: 0}, 1000)
}
function toPage (URL) {
    setTimeout( function() {window.location = URL}, 1000);
    $('.contant,.menu').animate({
        opacity: 0}, 1000)
}
function fromPage (URL) {
    setTimeout( function() {window.location = URL}, 1000);
    $('.pageInfo,.pageContent,.musicContent,.musicInfo').animate({
        opacity: 0}, 1000)
}
$('.contant,.pageInfo,.pageContent,.musicInfo,.musicContent').animate({
    opacity: 1}, 1000)

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementsByClassName('scrollRow').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementsByClassName('scrollRow').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementsByClassName('scrollRow').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementsByClassName('scrollRow').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementsByClassName('scrollRow').attachEvent('onmousewheel', scrollHorizontally);
    }
})();

   