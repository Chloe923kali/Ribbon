$(function () {
    //---漢堡按鈕---
    $('.hamburger').click(function () {
        // 交換 『 三 』& 『 X 』
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });



    // 滑動到指定位置
    $(".menu a").click(function () {
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1500);
    });

    // 置頂按鈕
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1500);
    });

    // 設定置頂按鈕淡入畫面
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#gotop").stop().fadeTo("", 1);
        } else {
            $("#gotop").stop().fadeOut();
        }
    });

});

// JQuery smoove =>單獨寫在外面
$('.smoove').smoove({
    offset: '25%',
});

$('.flip-z').smoove({
    rotateX: '90deg',
    moveZ: '-500px',
    moveY: '100px'
});