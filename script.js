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

// Animation Control
let speakingHud = document.getElementById("speakingHud");
let kaws = document.getElementById("kaws");
let videogames = document.getElementById("videogames");
let basketball = document.getElementById("ball");
let photo = document.getElementById("photograph");
let about = document.getElementById("about");

about.addEventListener("click", () => {
    setInterval(() => {
        setAnimation(speakingHud , "slideIn");
    } , 1000)
    
    setInterval(() => {
        // controls animation for basketball image
        setAnimation(basketball, "slideIn");
    } , 3000)

    setInterval(() => {
        // controls the animation for the camera image
        setAnimation(photo, "slideUp");
    }, 4000);

    setInterval(() => {
        // controls the animation for the Kaws image 
        setAnimation(kaws, "slideDown");
    }, 5000);

    setInterval(() => {
        // controls the animation for the video games image
        setAnimation(videogames, "slideInL");
    }, 6000);

});

function setAnimation(imageName , animationType ){
    imageName.style.visibility = "visible";
    imageName.style.animationName = animationType;
    imageName.style.animationDuration = "1s";
    imageName.style.animationFillMode = "forwards";
}



