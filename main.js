let icons = [];
let iconsInArray = [];
let icon1 = document.getElementById('icon-1');
let icon2 = document.getElementById('icon-2');
let icon3 = document.getElementById('icon-3');


function applyIcons() {
    icon1.src = iconsInArray[generateRandomNumber()][1];
    icon2.src = iconsInArray[generateRandomNumber()][1];
    icon3.src = iconsInArray[generateRandomNumber()][1];


}

function generateRandomNumber() {
    return parseInt(Math.random() * 100);
}

async function fetchIcons() {
    await fetch('https://api.github.com/emojis')
        .then(response => response.json())
        .then(data => icons = data);

    console.log(icons);

    iconsInArray = Object.entries(icons);

    console.log(iconsInArray);

    applyIcons();
}

fetchIcons();