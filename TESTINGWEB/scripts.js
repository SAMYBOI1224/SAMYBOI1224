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

    // Get a random index for the selected emotion
    const randomIndex = Math.floor(Math.random() * quotes[emotion].length);

    // Set the text content of the quote element to a random quote
    document.getElementById('quote').textContent = quotes[emotion][randomIndex];

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
