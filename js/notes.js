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
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("nameH1").textContent = username;
}

// some conditional statements
if (age >= 20) {
    console.log("Age above 20")
} else {
    console.log("Age below 20")
}

let message = age >= 18 ? "You're an adult" : "You are a minor";

let firstNameStatic = fullName.slice(0, 4);
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

let fruits = ["apple", "orange", "banana"];
fruits.push("cherry");
fruits.pop();

// rest parameters:
function openFridge(...foods) {
    console.log(...foods);
}

function getFoods(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);

const foods = getFoods(food1, food2, food3, food4);

// callback
function hello(callback) {
    setTimeout(function () {
        console.log("Hello");
    }, 3000);
    console.log("Hello!");
    callback();
}

function goodby() {
    console.log("Goodbye!");
}

hello(goodby);

// forEach()
let numbers = [1, 2, 3, 4, 5];

function displayAllElements(element) {
    console.log(element);
}

function doubleElements(element, index, array) {
    array[index] = element * 2;
}

numbers.forEach(doubleElements);
numbers.forEach(displayAllElements);

// map()
const numbersForMap = [1, 2, 3, 4, 5];

const squaresForMap = numbers.map(square);

function square(element) {
    return Math.pow(element, 2);
}

const students = ["sponge", "bob"];

function uppercaseStudents(element) {
    return element.toUpperCase();
}

const uppercaseStudents = students.map(uppercaseStudents);

// filter()

let numbersForFiltering = [1, 2, 3, 4, 5];

let numbersAfterFiltering = numbersForFiltering.filter(isEven);

function isEven(element) {
    if (element % 2 === 0) {
        return true;
    } else {
        false;
    }
}

// reduce()

const prices = [5, 7, 8, 2];

function addValues(previous, next) {
    return previous + next;
}

const total = prices.reduce(addValues);

const grades = [75, 50, 90, 80, 65, 95];

function getMaxGrade(prev, next) {
    return Math.max(prev, next);
}

const highestGrade = grades.reduce(getMaxGrade);

// function expressions:
const hello = function () {
    console.log("Hello");
}

hello();

setTimeout(function () {
    console.log("Hello");
}, 3000);

let numbersForMapping = [1, 2, 3, 4, 5];

const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

// arrow functions:

const helloFunction = function () {
    console.log("Hello");
}

const helloArrowFunction = (name) => {
    confirm.log(`Hello ${name}`);
}

setTimeout(() => console.log("Hello"), 3000);

// objects

function person1(firstName, lastName, age, isEmployed) {
    this.make = make,
    this.lastName = lastName,
    this.age = age,
    this.isEmployed = isEmployed
    this.sayHello = function () { console.log("Hi!") },
    this.sayBye = function () { console.log("Goodbye!") }
};

// classes
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

const product1 = new Product("Shirt", 19.99);

// Inheritance

class Animal {
    alive = true;

    constructor() {

    }

    eat() {
        console.log(`This ${this.name} is eating`);

    }
}

class Rabbit extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}

const rabbit1 = new Rabbit("Rabbit");

Rabbit.eat();