document.getElementById('playPause').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    if (video.paused) {
        video.play();
        this.textContent = 'Pause';
    } else {
        video.pause();
        this.textContent = 'Play';
    }
});
