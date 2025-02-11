let fullName = "Full Name";
let age = 25;
let student = false;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `I am a student: ${student}`;

// window prompt
let username;

username = window.prompt(`What's your username?`);
console.log(username);