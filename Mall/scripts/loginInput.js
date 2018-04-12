$(function () {
    $(".Info input").focus(function () {
        $(this).addClass("focus");
        $(this).val("");
    }).blur(function () {
        $(this).removeClass("focus");
        if($(this).val()==""){
            $(this).val(this.defaultValue);
        }
    })
});