const button = document.getElementById('button');
const loadingScreen = document.getElementById('loading-screen');
const image = document.querySelectorAll('.image');

button.addEventListener("click", function(){
    loadingScreen.style.display = 'none';
    for(var i = 0; i < image.length; i++){
        image[i].style.opacity = "1";
    }
});

