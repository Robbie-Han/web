$(function () {
    // 初始化并获得总长度
    var $imgRoll = $("#imageSlide div a");
    $imgRoll.css("opacity","0.7");
    var len  = $imgRoll.length;
    var index = 0;
    var adTimer = null;
    //定义初始状态
    //.eq(0).mouseover()是$imgRoll的连续动作，进入页面无mouseover,执行它相当于第一张图片触发了时间
    $imgRoll.mouseover(function(){
        index = $imgRoll.index(this);
        showImg(index);
    }).eq(0).mouseover();

    // 添加定时器实现图片的轮播
    adTimer = setInterval(function(){
        index++;
        if(index==len){index=0;}
        showImg(index);
    } , 2500);

    //鼠标悬停在图片上时，清除定时器，暂停滑动，鼠标离开后3s重新滑动到下一张图片
    $('#imageSlide').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            index++;
            if(index==len){index=0;}
            showImg(index);
        } , 2500);
    });
})

//显示不同的幻灯片
function showImg(index){
    var $rollObj = $("#imageSlide");
    var $rollList = $rollObj.find("div a");
    $("#Img").find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rollList.removeClass("backGround").css("opacity","0.7")
        .eq(index).addClass("backGround").css("opacity","1");
}