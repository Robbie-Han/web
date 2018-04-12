// 实现消息切换，将两个消息放到块中，将父元素浮动，两个块元素浮动并隐藏
$(function () {
    $(".switch_1").fadeIn();        //显示出第一条消息
    /*当鼠标放到第一元素上时，隐藏第二个块，放到第二个a元素时，隐藏第一个块*/
    $(".a_2").hover(function () {
        $(".switch_1").fadeOut(500);
        $(".switch_2").fadeIn(200);
    })
    $(".a_1").hover(function () {
        $(".switch_2").fadeOut(500);
        $(".switch_1").fadeIn(200);
    })
})