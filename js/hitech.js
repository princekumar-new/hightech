$(function(){
    $(" .first p").slideUp(1000);
    $(" .first p").slideDown(2000);
    $(".info p").fadeToggle(2000);
    $(".info p").fadeIn(2000);
    $(".newport h2").animate({
        "opacity":"0.8",
        "margin-left":"50px",

    },1000);

})