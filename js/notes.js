let fullName = "Full Name";
let age = 25;
let student = false;

//document.getElementById("p1").textContent = `My name is ${fullName}`;
//document.getElementById("p2").textContent = `My age is ${age}`;
//document.getElementById("p3").textContent = `I am a student: ${student}`;

// window prompt
/*let username;

username = window.prompt(`What's your username?`);
console.log(username);
*/

// html textbox
let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("nameH1").textContent = username;
}

// some conditional statements
if(age >= 20) {
    console.log("Age above 20")
} else {
    console.log("Age below 20")
}

let message = age >= 18 ? "You're an adult" : "You are a minor";

let firstNameStatic = fullName.slice(0,4);
// using index of for more dynamic execution
let firstNameDynamic = fullName.slice(0, fullName.indexOf(" "))

// method chaining
let usernameInput = window.prompt("Enter your username:");

usernameInput = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
usernameInput = letter + extraChar;
console.log(username);

// chaining:
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

