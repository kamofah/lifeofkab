let intro = document.getElementById("intro");
let introPhrase = "WELCOME TO THE LIFE OF KAB";
let phraseArr = introPhrase.split("");
let phraseLength = introPhrase.length;
let str = "";
let counter = 0;


intro.addEventListener("click", () => {
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
    if(counter == 7 ||  counter == 14 || counter == 19 || counter ==  22){
        str += " ";
    }
    counter++;
}

