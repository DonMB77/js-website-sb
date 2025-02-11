const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

// random number generator

const min = 50;
const max = 100

let randomNumber = Math.floor(Math.random() * max - min) + min; // generate number between min and max
console.log(randomNumber);

let time = 16;
let greeting = time <= 10 >= 0 ? "Good Morning" : time >= 10 ? "Good Day" : "Greeting";

console.log(greeting);

