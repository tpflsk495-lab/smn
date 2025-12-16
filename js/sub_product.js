//mgnb
$("#header .btn_ham").click(function(){
    $(".mgnb_wrap").fadeIn();
});
$(".mgnb_wrap .btn_close").click(function(){
    $(".mgnb_wrap").fadeOut();
});

//menu_list
$(".menu_list dl dt").click(function(){
    $(".menu_list dl dd").slideToggle();
});