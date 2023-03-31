const button = document.getElementById('button');
const loadingScreen = document.getElementById('loading-screen');
const image = document.querySelectorAll('.image');
const cards = document.querySelectorAll('.card');
const oneImg = document.querySelector('.image');
let timeoutId;

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
        image.forEach(img => {
            oneImg.style.opacity = "1";
        })
    });
});

// One card flip function

function flipCard(card){
    card.classList.add('flip');
    timeoutId = setTimeout(() => {
        card.classList.remove('flip');
        oneImg.style.opacity = "0";
    }, 3000);
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