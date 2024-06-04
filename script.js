function changeMedia() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const qualityVideo = document.getElementById('qualityVideo');
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        '144p': 'images/144p.png',
        '240p': 'images/240p.png',
        '480p': 'images/480p.png',
        '720p': 'images/720p.png',
        '1080p': 'videos/1080p.mp4'  // Path to the video file
    };

    if (selectedQuality === '1080p') {
        // Hide the image and show the video
        qualityImage.style.display = 'none';
        qualityVideo.style.display = 'block';
        qualityVideo.src = qualityImageMap[selectedQuality];
        qualityVideo.play();
    } else {
        // Show the image and hide the video
        qualityVideo.pause();
        qualityVideo.style.display = 'none';
        qualityImage.style.display = 'block';
        qualityImage.src = qualityImageMap[selectedQuality];
    }
}
