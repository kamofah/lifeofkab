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
    } , 2000)

    setInterval(() => {
        // controls the animation for the camera image
        setAnimation(photo, "slideUp");
    }, 3000);

    setInterval(() => {
        // controls the animation for the Kaws image 
        setAnimation(kaws, "slideDown");
    }, 4000);

    setInterval(() => {
        // controls the animation for the video games image
        setAnimation(videogames, "slideInL");
    }, 5000);

});


function setAnimation(imageName , animationType){
    imageName.style.visibility = "visible";
    imageName.style.animationName = animationType;
    imageName.style.animationDuration = "1s";
    imageName.style.animationFillMode = "forwards";
}

// Next Button Events
let next = document.getElementById("nxtButton");
let maintanenceMessgae = document.createElement("h1");
let backButton = document.getElementById("back")
let interestArea = document.getElementById("interests");
maintanenceMessgae.innerHTML = "Lifeofkab.com is still under construction, however if you still want to learn more about Kwaku take a look at his resume and projects using the links below"
maintanenceMessgae.style.color = "white";
maintanenceMessgae.style.fontFamily = 'VT323';
maintanenceMessgae.style.marginTop = "100px"
maintanenceMessgae.style.paddingLeft = "50px"
next.addEventListener("click", function(){
    speakingHud.remove();
    kaws.remove();
    photo.remove();
    basketball.remove();
    videogames.remove();
    backButton.style.justifyContent = "center"
    let resumeButton = document.createElement("button")
    let projectsButton = document.createElement("button",)
    createButton(projectsButton, "PROJECTS", "https://github.com/KwakuABoafo")
    createButton(resumeButton, "RESUME", "https://drive.google.com/file/d/16rB6tsaWKcbc9RWCyKd_IT-_oYEyESpx/view?usp=sharing")
    backButton.appendChild(resumeButton)
    backButton.appendChild(projectsButton)
    interestArea.appendChild(maintanenceMessgae)
});

function createButton(buttonElement, text, buttonLink){
    buttonElement.style.marginTop = "55px";
    buttonElement.className = "btn btn-outline-dark"
    buttonElement.style.height = "55px"
    buttonElement.style.backgroundColor = "white"
    buttonElement.innerHTML = text
    buttonElement.style.fontFamily = "VT323"
    buttonElement.style.marginRight = "10px"
    buttonElement.addEventListener("click", function(){
        location = buttonLink
    })
}



// This function will change the images 
// function changeImages(){
//     kaws.src = "assets/JavaLogo.jpg";
//     basketball.src = "assets/JSLogo.jpg";
//     console.log("clicked");
// }





