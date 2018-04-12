//点击换肤实现导航栏，分类栏换肤，此处还用到了名字为jquery.cookie.js实现换肤
$(function(){
    var $li =$(".hSet #skin li");
    $li.click(function(){
        switchSkin(this.id);
    });
    var cookie_skin =$.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
});
function switchSkin(skinName){
    $("#"+skinName).addClass("selected").siblings().removeClass("selected");
    $("#skinFile").attr("href","styles/skin/"+skinName+".css");
    $.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}