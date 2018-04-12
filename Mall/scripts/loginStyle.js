$(function () {
    $("#login #switch #normal").hover(function () {
        $("#login img").hide(100);
        $("#login form").show(100);
    })
    $("#login #switch #QR_cord").hover(function () {
        $("#login form").fadeOut(100);
        $("#login img").fadeIn(100);
    })
})