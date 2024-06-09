let selectedFlower = '';

function selectFlower(flower) {
    selectedFlower = flower;
    document.querySelector('.flower-selection').style.display = 'none';
    document.getElementById('emotion-section').style.display = 'block';
}

function selectEmotion(emotion) {
    const flowerImages = {
        rose: 'images/rose.jpeg',
        tulip: 'images/tulip.jpeg',
        lavender: 'images/lavender.jpeg'
    };
    
    const quotes = {
        angry: 'YAAN MO SILA DI NATIN SILA BATE',
        sad: 'Ice cream treat',
        lonely: 'Talk to me if you want',
        happy: 'Keep on Smiling :)'
    };

    document.getElementById('emotion-section').style.display = 'none';
    document.getElementById('selected-flower').src = flowerImages[selectedFlower];
    document.getElementById('quote').textContent = quotes[emotion];
    document.getElementById('result-section').style.display = 'block';
}
