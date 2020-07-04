// This code is for typing out the "Welcome to the life of K.A.B" phrase on the intro screen
let intro = document.getElementById("intro");
let introPhrase = "WELCOME TO THE LIFE OF K.A.B";
let phraseArr = introPhrase.split("");
let phraseLength = introPhrase.length;
let str = "";
let counter = 0;


document.addEventListener("DOMContentLoaded", () => {
    intro.innerText = "";
    setInterval(typePhrase , 100);
    counter = 0;
    str = "";
})

function typePhrase(){
    if(counter <= 12){
        intro.innerText = str + phraseArr[counter];
    }

    if(counter > 12 && counter < phraseLength){
        intro.innerText = str + phraseArr[counter];
    }
    str = intro.innerText;
    if(counter == 10){
        str += "\n";
    }
    if(phraseArr[counter] == " "){
        str += " ";
    }
    counter++;
}

// This code types out the phrases on the speaking hud
// let content = document.getElementById("intro");
// let introPhrase = "WELCOME TO THE LIFE OF K.A.B";
// let phraseArr = introPhrase.split("");
// let phraseLength = introPhrase.length;
// let str = "";
// let counter = 0;



// Animation 
let speakingHud = document.getElementById("speakingHud");
let kaws = document.getElementById("kaws");
let videogames = document.getElementById("videogames");
let basketball = document.getElementById("ball");
let photo = document.getElementById("photograph");
let about = document.getElementById("about");
about.addEventListener("click", () => {
    setInterval(() => {
        speakingHud.style.animationName = "slideIn";
        speakingHud.style.animationDuration = "1s";
        speakingHud.style.animationFillMode = "forwards";
    } , 1000)
    
    setInterval(() => {
        // controls animation for basketball image
        basketball.style.visibility = "visible";
        basketball.style.animationName = "slideIn";
        basketball.style.webkitAnimationDuration = "1s";
        basketball.style.webkitAnimationFillMode = "forwards";
    } , 3000)

    setInterval(() => {
        // controls the animation for the camera image
        photo.style.visibility = "visible";
        photo.style.animationName = "slideUp";
        photo.style.webkitAnimationDuration = "1s";
        photo.style.webkitAnimationFillMode = "forwards";
    }, 4000);

    setInterval(() => {
        // controls the animation for the Kaws image 
        kaws.style.visibility = "visible";
        kaws.style.animationName = "slideDown";
        kaws.style.webkitAnimationDuration = "1s";
        kaws.style.webkitAnimationFillMode = "forwards";
    }, 5000);

    setInterval(() => {
        // controls the animation for the video games image
        videogames.style.visibility = "visible";
        videogames.style.animationName = "slideInL";
        videogames.style.webkitAnimationDuration = "1s";
        videogames.style.webkitAnimationFillMode = "forwards";
    }, 6000);

})


