let selectedFlower = '';

function selectFlower(flower) {
    selectedFlower = flower;
    document.querySelector('.flower-selection').style.display = 'none';
    document.getElementById('emotion-section').style.display = 'block';
}

function selectEmotion(emotion) {
    // Other code for selecting emotion...

    // Set the src attribute of the result image based on the selected flower
    if (selectedFlower === 'forgetmenot') {
        document.getElementById('result-image').src = 'images/forgetmenot-result.jpeg';
    } else if (selectedFlower === 'tulip') {
        document.getElementById('result-image').src = 'images/tulip-result.jpeg';
    } else if (selectedFlower === 'buttercups') {
        document.getElementById('result-image').src = 'images/buttercup.jpeg'; // Change the image filename here
    }

    document.getElementById('emotion-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
}

function goToFlowerPage() {
    const flowerPages = {
        forgetmenot: 'flowers/lavender/index.html',
        tulip: 'flowers/tulip/index.html',
        buttercups: 'flowers/rose/index.html'
    };
    window.location.href = flowerPages[selectedFlower];
}
