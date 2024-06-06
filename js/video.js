document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('background-video');
    const sources = video.getElementsByTagName('source');
    const videos = [
        './video/bg-video01.mp4',
        './video/bg-video02.mp4',
        './video/bg-video03.mp4'
    ];
    let currentVideo = 0;

    function changeVideo() {
        video.classList.add('fade-out'); // 添加淡出效果
        setTimeout(() => {
            currentVideo = (currentVideo + 1) % videos.length;
            sources[0].src = videos[currentVideo];
            video.load();
            video.play();
            video.classList.remove('fade-out'); // 移除淡出效果
        }, 500); // 确保这个时间与过渡效果一致
    }


    // 設置定時器，每隔多少秒更換一次影片
    setInterval(changeVideo, 5000);
});