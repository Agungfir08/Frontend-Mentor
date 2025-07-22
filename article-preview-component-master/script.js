const shareButton = document.getElementById('share-button');
const socialMedia = document.getElementById('social-media');

shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('active');

    if (shareButton.classList.contains('active')) {
        socialMedia.classList.add('active');
    } else {
        socialMedia.classList.remove('active');
    }
});
