const button = document.getElementById('button');
const loadingScreen = document.getElementById('loading-screen');
const image = document.querySelectorAll('.image');

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

function flipCards(){
    const cards = document.querySelectorAll('.card');
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