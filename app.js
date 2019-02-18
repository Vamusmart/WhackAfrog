

//Clicking on the startGame button it runs the game that show mrbump jumping randomly in a different hole.
//Mrbump goes up in a different hole with an interval of 2 seconds (2000 milliseconds).
//The setInterval calls the function "jumpHole"
let int
function startGame() {
    int = setInterval(jumpHole, 2000);
}


function jumpHole() {

    let randomNumber = Math.floor(Math.random() * 6 + 1);
    //console.log(randomNumber);

    if (randomNumber == 1) {
        document.getElementById("mrbump1").style.visibility = "visible";
        document.getElementById("mrbump1").src = "./mrbump.png";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 2) {
        document.getElementById("mrbump2").style.visibility = "visible";
        document.getElementById("mrbump2").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 3) {
        document.getElementById("mrbump3").style.visibility = "visible";
        document.getElementById("mrbump3").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 4) {
        document.getElementById("mrbump4").style.visibility = "visible";
        document.getElementById("mrbump4").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 5) {
        document.getElementById("mrbump5").style.visibility = "visible";
        document.getElementById("mrbump5").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;

    } else if (randomNumber == 6) {
        document.getElementById("mrbump6").style.visibility = "visible";
        document.getElementById("mrbump6").src = "./mrbump.png"
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;


    }
    if (points >= 5){
        alert("You won!");
        stopGame()
        points=0;
    }
}

//Counter
let points = 0;

//Clicking the picture "getElementById("mrbump1") it runs the function "score" 
//that add a point each time you click on the image

document.getElementById("mrbump1").addEventListener("click", score);
document.getElementById("mrbump2").addEventListener("click", score);
document.getElementById("mrbump3").addEventListener("click", score);
document.getElementById("mrbump4").addEventListener("click", score);
document.getElementById("mrbump5").addEventListener("click", score);
document.getElementById("mrbump6").addEventListener("click", score);

function score() {
    points += 1;
}



function stopGame() {
    clearInterval(int);
}


