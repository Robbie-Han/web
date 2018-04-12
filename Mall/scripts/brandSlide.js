$(function () {
    $("#jnBrandTab li a").click(function () {
        $(this).parent().addClass("tab").siblings().removeClass("tab");
        var index =$("#jnBrandTab li a").index(this);
        showBrandList(index);
        return false;
    }).eq(0).click();
})

function showBrandList(index) {
    var $rollObj = $("#jnBrandList");
    var rollWidth = $rollObj.find("li").outerWidth();//outWidth()的宽度包括content+padding+border
                                                    //outWith（true)包括盒子的所有
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollObj.stop(true,false).animate({ left : -rollWidth*index},1000);//左移index个宽度
}
// stop()第一个参数默认是false，当前动作停止后后续动作继续，设置为true则所有图片停止滑动
//第二个参数默认false,不立即执行完当前动作，停到那算哪，如果是true,则立即执行完当前动作，停到最终位置