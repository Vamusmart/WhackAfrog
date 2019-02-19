

//Clicking on the startGame button runs the game that show mrbump jumping randomly in a different hole.
//Mrbump goes up in a different hole with an interval of 2 seconds (2000 milliseconds).
//The setInterval calls the function "jumpHole"
let counterMrbumpTopUp = 0;
let int
function startGame() {
    int = setInterval(jumpHole, 1000);
}

//The function jumpHole due to the randomNumber returns a number between 1 and 6
//that represents the hole where mrbump will turn up
//if it's the #1 for example the elementById will show the picture of mrbump in the hole #1
//and hide mrbump picture in all the other holes 
//The getElementById("points") indicates the function where adds the points if the element has been clicked
function jumpHole() {

    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(counterMrbumpTopUp);

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
        counterMrbumpTopUp++

    } else if (randomNumber == 2) {
        document.getElementById("mrbump2").style.visibility = "visible";
        document.getElementById("mrbump2").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;
        counterMrbumpTopUp++

    } else if (randomNumber == 3) {
        document.getElementById("mrbump3").style.visibility = "visible";
        document.getElementById("mrbump3").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;
        counterMrbumpTopUp++;

    } else if (randomNumber == 4) {
        document.getElementById("mrbump4").style.visibility = "visible";
        document.getElementById("mrbump4").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;
        counterMrbumpTopUp++;

    } else if (randomNumber == 5) {
        document.getElementById("mrbump5").style.visibility = "visible";
        document.getElementById("mrbump5").src = "./mrbump.png";
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump6").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;
        counterMrbumpTopUp++;

    } else if (randomNumber == 6) {
        document.getElementById("mrbump6").style.visibility = "visible";
        document.getElementById("mrbump6").src = "./mrbump.png"
        document.getElementById("mrbump1").style.visibility = "hidden";
        document.getElementById("mrbump2").style.visibility = "hidden";
        document.getElementById("mrbump3").style.visibility = "hidden";
        document.getElementById("mrbump4").style.visibility = "hidden";
        document.getElementById("mrbump5").style.visibility = "hidden";
        document.getElementById("points").innerHTML = points;
        counterMrbumpTopUp++;
    }

    //the if/else statement stop the game after 30 times mrbump is displayed
    if (counterMrbumpTopUp === 20) {
        document.body.style.background = "black url('./gameover.jpg') no-repeat top left";
        //alert("You Losst!");
        stopGame()
    }

    //if the player reaches the score of 10 the if/else statement display that he has won and stops the game.
    if (points >= 5) {
        document.body.style.background = "white url('./won3.gif') no-repeat top left";
        stopGame()
        points = 0;
    }
}

//Points counter.
let points = 0;

//Clicking the picture stored on the "getElementById("mrbump1") it runs the function "score" 
//that add one point each time you click on the mrbump image showed in the hole.

document.getElementById("mrbump1").addEventListener("click", score);
document.getElementById("mrbump2").addEventListener("click", score);
document.getElementById("mrbump3").addEventListener("click", score);
document.getElementById("mrbump4").addEventListener("click", score);
document.getElementById("mrbump5").addEventListener("click", score);
document.getElementById("mrbump6").addEventListener("click", score);

function score() {
    points += 1;
}


//Quit the game
function stopGame() {
    clearInterval(int);
}

//The function reload the page to start a new game
function reload() {
    location.reload();
}
