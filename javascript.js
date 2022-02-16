const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");

let colorOrder = [];
let clickedOrder = [];
let score = 0;

let shuffleOrder = () => {
  let numberOrder = Math.floor(Math.random() * 4);
  colorOrder[colorOrder.length] = numberOrder;
  clickedOrder = [];

  for (let x in colorOrder) {
    let color = setOpacity(colorOrder[x]);
    lightColor(color, Number(x) + 1);
  }
};

let lightColor = (pickColor, number) => {
  number = number * 500;
  setTimeout(() => {
    pickColor.classList.add("selected");
    console.log(pickColor);
  }, number - 500);
  setTimeout(() => {
    pickColor.classList.remove("selected");
    console.log(pickColor);
  }, number - 100);
};

let checkOrder = () => {
  setTimeout(() => {
    for (let x in clickedOrder) {
      if (clickedOrder[x] != colorOrder[x]) {
        gameOver();
        break;
      }
    }
  }, 500);

  setTimeout(() => {
    if (clickedOrder.length == colorOrder.length) {
      alert(`Score: ${score}\nYou win! Ready to next level!`);
      nextLevel();
    }
  }, 500);
};

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  setOpacity(color).classList.add("selected");

  setTimeout(() => {
    setOpacity(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

let setOpacity = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

let nextLevel = () => {
  score++;
  shuffleOrder();
};

let gameOver = () => {
  alert(`Score: ${score}!\nYou lose!\n`);
  colorOrder = [];
  clickedOrder = [];

  playGame();
};

let playGame = () => {
  alert("Start new game!");
  score = 0;

  nextLevel();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
