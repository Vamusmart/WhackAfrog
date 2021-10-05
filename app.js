window.addEventListener("load", () => {
    document.querySelector("button").addEventListener("click", () => {
      startGame();
    });
  });
  
  const grounds = document.querySelectorAll(".ground");
  const length = grounds.length;
  
  var interval = setInterval(() => {
    //Generate a random number
    const random = Math.floor(Math.random() * length);
  
    //Remove the active class from every ground
    grounds.forEach((e) => {
      e.classList.remove("active");
    });
  
    //Add the active class to random ground
    grounds[random].classList.add("active");
  }, 1000);
  
  const score = document.querySelector("#score > span");
  let count = 0;
  let click = 0;
  
  grounds.forEach((e) => {
    e.addEventListener("click", () => {
      //If ground has active class which means it has mole
      //So increase the count
      click++;
  
      if (e.classList.contains("active")) {
        count++;
        score.innerHTML = count;
        console.log("Frogs caught: " + count);
      }
      if (count === 5) {
        count = 0;
        click = 0;
        document.body.style.background =
          "white url('./img/congblue.gif') no-repeat center";
        document.body.style.backgroundSize = "contain";
  
        document.getElementsByTagName("main")[0].style.visibility = "hidden";
      }
      console.log("Mouse clicks: " + click);
  
      //the if/else statement stop the game after 5 times the frog is displayed
      if (click === 15) {
        stopGame();
      }
    });
  });
  
  const startGame = () => {
    const grounds = document.querySelectorAll(".ground");
    const length = grounds.length;
    const score = document.querySelector("#score > span");
    let count = 0;
    console.log(count);
  
    grounds.forEach((e) => {
      e.addEventListener("click", () => {
        //If ground has active class which means it has mole
        //So increase the count
        if (e.classList.contains("active")) {
          count++;
          console.log(count);
          score.innerHTML = count;
        }
      });
    });
  
    var interval = setInterval(() => {
      //Generate a random number
      const random = Math.floor(Math.random() * length);
  
      //Remove the active class from every ground
      grounds.forEach((e) => {
        e.classList.remove("active");
      });
  
      //Add the active class to random ground
      grounds[random].classList.add("active");
    }, 1000);
  };
  
  //Quit the game
  const stopGame = () => {
    clearInterval(interval);
    count = 0;
    // document.body.style.position = "absolute";
    document.body.style.background =
      "black url('./img/gameover.jpg') no-repeat center";
    //   alert("Game Over");
    click = 0;
    document.getElementsByTagName("main")[0].style.visibility = "hidden";
    document.body.style.backgroundSize = "contain";
  
    // document.getElementsByClassName("wrapper")[0].style.visibility = "hidden";
  };
  
  function refreshPage() {
    window.location.reload();
  }
  