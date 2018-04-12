// 设置输入框在获得焦点时，默认值清空，加上边框，失去焦点的时候，默认值重新显示，边框消失
$(function () {
    $("#inputSearch").focus(function () {
        $(this).addClass("focus");
        $(this).val("")

    }).blur(function () {
        $(this).removeClass("focus");
        if($(this).val()==''){
            $(this).val(this.defaultValue);
        }
    })
})