const choicediv = document.getElementById("choices");

const rockdiv = document.getElementById("rock");
const paperdiv = document.getElementById("paper");
const scissorsdiv = document.getElementById("scissors");

rockdiv.addEventListener("mouseover", () => {
  rockdiv.style.cursor = "pointer";
});
rockdiv.addEventListener("click", () => {
  const choice = "rock";
  game(choice);
});

paperdiv.addEventListener("mouseover", () => {
  paperdiv.style.cursor = "pointer";
});
paperdiv.addEventListener("click", () => {
  const choice = "paper";
  game(choice);
});

scissorsdiv.addEventListener("mouseover", () => {
  scissorsdiv.style.cursor = "pointer";
});
scissorsdiv.addEventListener("click", () => {
  const choice = "scissors";
  game(choice);
});

function game(choice) {
  choicediv.style.visibility = "hidden";
  const playerdiv = document.getElementById("player");
  const computerdiv = document.getElementById("computer");
  let compchoice = computerChoice();
  playerdiv.innerHTML = `<img class="gamepic" src=/img/${choice}.png />`;
  computerdiv.innerHTML = `<img class="gamepic" style="transform: scaleX(-1);" src=/img/${compchoice}.png />`;
  score(choice, compchoice);
}

function computerChoice() {
  let compchoice = Math.floor(Math.random() * (4 - 1) + 1);
  let choices = ["rock", "paper", "scissors"];
  return choices[compchoice - 1];
}

function score(choice, compchoice) {
  let resaluttxt = "";
  if (choice == compchoice) {
    resaluttxt = "Draw";
  } else if (choice == "rock") {
    if (compchoice == "paper") {
      resaluttxt = "You lost";
    } else if (compchoice == "scissors") {
      resaluttxt = "You won";
    }
  } else if (choice == "paper") {
    if (compchoice == "rock") {
      resaluttxt = "You won";
    } else if (compchoice == "scissors") {
      resaluttxt = "You lost";
    }
  } else if (choice == "scissors") {
    if (compchoice == "rock") {
      resaluttxt = "You lost";
    } else if (compchoice == "paper") {
      resaluttxt = "You won";
    }
  }

  const scorediv = document.getElementById("score");
  const resaultdiv = document.createElement("div");
  let retrybtn = document.createElement("button");
  retrybtn.innerText = "Play again";
  retrybtn.classList.add("againbutton");
  resaultdiv.innerText = resaluttxt;
  scorediv.appendChild(resaultdiv);
  scorediv.appendChild(retrybtn);

  retrybtn.addEventListener("click", reset);
}

function reset() {
  location.reload();
}

window.addEventListener("load", () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault(), false);
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode == 123) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
});
