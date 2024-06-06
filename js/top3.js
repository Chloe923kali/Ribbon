document.addEventListener('DOMContentLoaded', function () {
    const top1 = document.querySelector('.top1');
    const top2 = document.querySelector('.top2');
    const top3 = document.querySelector('.top3');
    const contentTop1 = document.getElementById('content-top1');
    const contentTop2 = document.getElementById('content-top2');
    const contentTop3 = document.getElementById('content-top3');

    function showContent(contentToShow) {
        contentTop1.classList.remove('active');
        contentTop2.classList.remove('active');
        contentTop3.classList.remove('active');
        contentToShow.classList.add('active');
    }

    // 初始显示 contentTop1
    showContent(contentTop1);

    top1.addEventListener('mouseover', function () {
        showContent(contentTop1);
    });

    top2.addEventListener('mouseover', function () {
        showContent(contentTop2);
    });

    top3.addEventListener('mouseover', function () {
        showContent(contentTop3);
    });

    const productTop3 = document.querySelector('.product-top3');

    productTop3.addEventListener('mouseleave', function () {
        // 当鼠标离开 .product-top3 时显示 contentTop1
        showContent(contentTop1);
    });
});