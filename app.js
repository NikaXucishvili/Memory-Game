const button = document.getElementById('button');
const loadingScreen = document.getElementById('loading-screen');
const image = document.querySelectorAll('.image');
const cards = document.querySelectorAll('.card');
let timeoutId;

// random images
const cardImages = ["spongebob.png", "jerry.png", "mario.png", "tom.png", "mickeymouse.png", "pumba.png", "scoobydoo.png", "shrek.png"];

// Create a new array with two copies of each image
let shuffledImages = [...cardImages, ...cardImages];

// Shuffle the array randomly
for (let i = shuffledImages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
}

cards.forEach((card, index) => {
  const image = card.querySelector(".image");
  image.setAttribute("src", `./images/${shuffledImages[index]}`);
});




// Loading screen function

button.addEventListener("click", function(){
    loadingScreen.style.display = 'none';
    for(var i = 0; i < image.length; i++){
        image[i].style.opacity = "1";
    }
});


// Fliping cards function
button.addEventListener('click', flipCards);
button.addEventListener('click', widthDone);


setTimeout(function(){
    cards.forEach(card => {
        card.classList.remove('flip');
        for(var c = 0; c < image.length; c++){
            image[c].style.opacity = "0";
        }
    });
}, 3000);

// on click card flip function

cards.forEach(card => {
    card.addEventListener('click', () => {
        flipCard(card);
    });
});

// One card flip function

function flipCard(card){
    // Hide image for all cards except the clicked one
    const images = card.querySelectorAll('.image');
    images.forEach(image => {
        if (image.parentElement !== card) {
            image.style.opacity = '0';
        }
    });
    // Flip the clicked card and show its image
    card.classList.add('flip');
    const image = card.querySelector('.image');
    if (image) {
        image.style.opacity = '1';
    }
    // Set timeout to flip card back and hide its image after 2 seconds
    if (card.timeoutId) {
        clearTimeout(card.timeoutId);
    }
    card.timeoutId = setTimeout(() => {
        card.classList.remove('flip');
        if (image) {
            image.style.opacity = '0';
        }
        delete card.timeoutId;
    }, 2000);
}



// All cards flip in the start

function flipCards(){
    cards.forEach(card => {
        card.classList.add('flip');
    });
}

// Cards loading function
function widthDone(){
    setTimeout(() => {
        for(var b = 0; b < image.length; b++){
            image[b].style.width = "100%";
        }
    }, 400);
}

// Cards matching function

const matchingCards = (card1, card2) =>{
    card1 = document.querySelector('.card');
    card2 = document.querySelector('.card');
    image1 - card1.querySelector('.image')
    image2 = card2.querySelector('.image2');
    if(image1,card1.getAttribute('src') == image2,card2.getAttribute('src')){
        alert('matching');
    }
}

