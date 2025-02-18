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

// getters and setters
class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Widht must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get widht(){
        return this._width.toFixed(1);
    }

    get height(){
        return this._height.toFixed(1);
    }

    get area() {
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = Rectangle(3, 4);

rectangle.widht = 5;
rectangle.height = 6;

console.log(rectangle.area);

// destructuring

// swap value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

// swap 2 elements in array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

// assign array elements to variables

const [firstColor, secondColor, thirdColor, ...restColorsArray] = colors;

// extract values form objects

const person2 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person3 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstNameP2, lastNameP2, agePersonP2, jobP2} = person2;
const {firstNameP3, lastNameP3, agePersonP3, jobP3="Unemployed"} = person3;

// destructure in function parameters

function displayPerson({firstNameDisplay, lastNameDisplay, ageDisplay, jobDisplay}) {
    console.log("displayPerson");
}

displayPerson(person1);

// nested objects

const personObj = {
    fullName: "Name",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "chess", "cooking"],
    address: {
        street: "example street 13",
        city: "Munich",
        country: "Germany"
    }
}

console.log(personObj.fullName);
console.log(personObj.address.street);

for (const property in personObj.address) {
    console.log(personObj.address[property]);
}

// Arrays of Objects

const fruitsArray = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}]
    
console.log(fruits[0].name);

fruitsArray.push({name: "grapes", color: "purple", calories: 62});

fruits.forEach(fruit => console.log(fruit.name));
const fruitNames = fruitsArray.map(fruit => fruit.name);

const fruitsBelow100Calories = fruitsArray.filter(fruit => fruit.calories < 100);

// sort()

const fruitsArrayToBeSorted = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}]

let numbersToBeSorted = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbersToBeSorted.sort((a, b) => a - b);

people.sort((a, b) => a.calories - b.calories);

people.sort((a, b) => a.name.localCompare(b.name));

// shuffling an array

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function shuffle(array) {
    for (let i = array.length -1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);

// Dates

// Date(year, month, day, hour, minute, second, ms)
const date = new Date(); // current date

const year = date.getFullYear();
const month = date.getMonth(); // 0 indexed (jan = 0)


// closures

function outer() {

let message = "Hello"; // encapsulated and thus private

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// state maintenance
function createCounter() {
    function increment() {
        let count = 0;
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();

console.log(`The current count is ${counter.getCount()}`);