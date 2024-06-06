$(function () {
    //---漢堡按鈕---
    $('.hamburger').click(function () {
        // 交換 『 三 』& 『 X 』
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

    //文字輪播
    $('.slideText').textslider({
        // 捲動方向
        direction: 'scrollDown', // 捲動方向: scrollUp向上, scrollDown向下
        scrollNum: 5, // 一次捲動幾個<li>
        scrollSpeed: 800, // 捲動速度(ms)
        pause: 1000  // 停頓時間(ms)
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