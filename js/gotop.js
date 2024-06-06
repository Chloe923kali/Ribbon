// 置頂按鈕
$("#gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1500);
});

// 設定置頂按鈕淡入畫面
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $("#gotop").stop().fadeTo("", 1);
    } else {
        $("#gotop").stop().fadeOut();
    }
});