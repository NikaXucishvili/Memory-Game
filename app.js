const button = document.getElementById('button');
const loadingScreen = document.getElementById('loading-screen');
const image = document.querySelectorAll('.image');
const cards = document.querySelectorAll('.card');
let timeoutId;

// random images
const cardImages = ["spongebob.png", "jerry.png", "mario.png", "tom.png", "mickeymouse.png", "pumba.png", "scoobydoo.png", "shrek.png", "minion.png"];

cards.forEach(card => {
  const randomIndex = Math.floor(Math.random() * (cardImages.length / 2));
  const evenIndex = randomIndex * 2;
  card.setAttribute("data-card", evenIndex);
  const image = card.querySelector(".image");
  image.setAttribute("src", `./images/${cardImages[randomIndex]}`);
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