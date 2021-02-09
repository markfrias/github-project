let icons = [];
let iconsInArray = [];
let icon1 = document.getElementById('icon-1');
let icon2 = document.getElementById('icon-2');
let icon3 = document.getElementById('icon-3');
let viewButton = document.getElementById('view-button');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset-page');
let zodiacSelector = document.getElementById('zodiac');
let resultsSection = document.getElementById('result');

//!!!!!! Add error checking !!!!!
// Event listeners
viewButton.addEventListener("click", generateIcons);
startButton.addEventListener("click", moveToNextSection)
resetButton.addEventListener("click", resetPage);

function resetPage() {
    location.reload();
}

function moveToNextSection() {
    document.getElementById("header").style.position = "relative";

    let selection = document.getElementById("selection");
    selection.style.display = "flex";
    selection.style.position = "relative";
    
    selection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        document.getElementById("header").style.display = "none";

    }, 1000);

    //selection.style.position = "absolute";
    //document.getElementById("header").style.display = "none";
    
}


function applyIcons(number) {
    icon1.src = iconsInArray[generateRandomNumber() * number][1];
    icon2.src = iconsInArray[generateRandomNumber() * number][1];
    icon3.src = iconsInArray[generateRandomNumber() * number][1];


}

function generateRandomNumber() {
    return parseInt(Math.random() * 100);
}

function generateIcons() {
    // Assign selection to zodiac number
    let zodiacWord = zodiac.value;
    let zodiacNumber = 1;
    switch (zodiacWord) {
        case "taurus":
            zodiacNumber = 2;
            break;
        case "gemini":
            zodiacNumber = 3;
            break;
        case "cancer":
            zodiacNumber = 4;
            break;
        case "leo":
            zodiacNumber = 5;
            break;
        case "virgo":
            zodiacNumber = 6;
            break;
        case "libra":
            zodiacNumber = 7;
            break;
        case "scorpio":
            zodiacNumber = 8;
            break;
        case "sagittarius":
            zodiacNumber = 9;
            break;
        case "capricorn":
            zodiacNumber = 10;
            break;
        case "aquarius":
            zodiacNumber = 11;
            break;
        case "pisces":
            zodiacNumber = 12;
            break;

    }

    // Make results visible and into view
    resultsSection.style.display = "flex";
    let result = document.getElementById("result")
    result.scrollIntoView({ behavior: 'smooth' });
    result.style.position = "absolute";
    setTimeout(() => {
        document.getElementById("selection").style.display = "none";

    }, 1000);
    

    fetchIcons(zodiacNumber);
    console.log(zodiacNumber);
    console.log(zodiacWord);

}

async function fetchIcons(zodiacNumber) {
    await fetch('https://api.github.com/emojis')
        .then(response => response.json())
        .then(data => icons = data);

    console.log(icons);

    iconsInArray = Object.entries(icons);

    console.log(iconsInArray);
    applyIcons(zodiacNumber);
}

