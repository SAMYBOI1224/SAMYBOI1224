let selectedFlower = '';

function selectFlower(flower) {
    selectedFlower = flower;
    document.querySelector('.flower-selection').style.display = 'none';
    document.getElementById('emotion-section').style.display = 'block';
}

function selectEmotion(emotion) {
    const quotes = {
        angry: ['Kanino ka galit? Sasakalin natin sila!', 'Yaan mo sila, di natin sila bati.', 'Sumbong mo saken, yari yan.'],
        sad: ['Ice cream is key.', 'Wawawa ulit. AHAHAH', 'Read?'],
        lonely: ['Binge watch >>', 'Ihh wawawa', 'Talk to someone??'],
        happy: ['Keep on Smiling :)', 'Yieeee', 'Luh happy']
    };

    const flowerImagesNew = {
        rose: 'images/rose-result.jpeg',
        tulip: 'images/tulip-result.jpeg',
        lavender: 'images/lavender-result.jpeg'
    };

    const randomIndex = Math.floor(Math.random() * quotes[emotion].length);

    document.getElementById('emotion-section').style.display = 'none';
    document.getElementById('quote').textContent = quotes[emotion][randomIndex];
    document.getElementById('result-section').style.display = 'block';

    // Change the displayed image based on the selected flower
    document.getElementById('result-image').src = flowerImagesNew[selectedFlower];
}

function goToFlowerPage() {
    const flowerPages = {
        rose: 'flowers/rose/index.html',
        tulip: 'flowers/tulip/index.html',
        lavender: 'flowers/lavender/index.html'
    };
    window.location.href = flowerPages[selectedFlower];
}
