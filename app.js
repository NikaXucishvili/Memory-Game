let button = document.getElementById('button');
let loadingScreen = document.getElementById('loading-screen');
let image = document.querySelectorAll('.image');

button.addEventListener("click", function(){
    loadingScreen.style.display = 'none';
});

button.addEventListener("click", function(){
    for(var i = 0; i < image.length; i++){
        image[i].style.opacity = "1";
    }
})
