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
   