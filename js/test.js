"use strict";

window.alert = console.log;

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false

// function isEmpty(obj){

//   for(let values in obj){
//     return false;
//   };

//   return true;
// }

// let salaries = {

// };

// console.log(sumSalaries(salaries));

// function sumSalaries(obj = {}){
//   let sum = 0;

//   for(let prop in obj){
//     sum += obj[prop];
//   }

//   return sum;
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// console.log(menu);

// function multiplyNumeric(obj){
//   for(let key in obj){
//     if(isNumber(obj[key]))
//       obj[key] *= 2;
//   }
// }

// function isNumber(value){
//   return typeof (value) === "number"
// }

// let greeting = "hi";

// const obj = {
//   greeting: "hey",

//   fo() {
//     const greeting = "hola";

//     const fo2 = function () {
//       const greeting = "hello";

//       const arrowFo = () => {
//         console.log(this.greeting);
//       };

//       arrowFo();
//     };
//     fo2();
//   },
// };

// obj.fo();

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// function Calculator(){
//   this.read  = function (){
//     this.num1 = +prompt("Enter the first number: ");
//     this.num2 = +prompt("Enter the second number: ");
//   };

//   this.sum = function(){
//     return this.num1 + this.num2;
//   };

//    this.mul = function (){
//     return this.num1 * this.num2;
//   };
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value);

// function Accumulator(startingValue) {"Enter a number: ";
//   this.value = startingValue;

//   this.read = function () {
//     this.value += +prompt("Enter a number: ");
//   };

// }

// let newUser = {
//   name : "John",
// }

// let id = Symbol("session_id");
// newUser[id] = Math.round(Math.random() * 1_000_000_000_000);
// let id2 = Symbol("session_id");
// newUser[id2] = Math.round(Math.random() * 1_000_000_000_000);
// let id3 = Symbol("session_id");
// newUser[id3] = Math.round(Math.random() * 1_000_000_000_000);
// let id4 = Symbol("session_id");
// newUser[id4] = Math.round(Math.random() * 1_000_000_000_000);

// console.log(newUser
// )

// let user = {
//   name: "John",
//   salary: 400,

//   toString(){
//     return `Name: "${this.name}"`;
//   },

//   valueOf(){
//     return this.salary;
//   }
// }

// // conversions demo:
// confirm(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

// function readNumber (){
//   let input;

//   while (true){
//     input = prompt("Enter a number: ")

//     if (input === null || input === "")
//       return null;

//     if (isInteger(input))
//       return input;
//   }
// }

// readNumber()

// function truncate(str, maxlength){
//   return (str.length <= maxlength) ? str : str.slice(0, maxlength) + "\u2026"
// }

// console.log(truncate("fsfgfd", 5))

// function extractCurrencyValue(str){
//   return parseFloat(str.slice(1));
// }

// function sumInput(){
//   let input;
//   let total = 0;
//   let allInput = [0];

//   while (true){
//     input = prompt("Enter a number: ");

//     if (input === '' || input === null || ! isFinite(input))
//       break;

//     allInput.push(input);
//   }

//   for(let value of allInput)
//     total += value;

//   return total;
// }

// console.log(sumInput());

// function camelize(str){
//     let arr = str.toLocaleLowerCase().split('');

//     for (let pos = 0; true; ){
//         pos = arr.indexOf('-');
//         if (pos == -1)
//             break;
//         arr[pos + 1] = arr[pos + 1].toLocaleUpperCase();
//         arr.splice(pos,1);
//     }

//     arr = arr.join('');
//     console.log(arr);

// }

// function camelize2(str) {
//   return str
//   .split('-')
//   .map((word, pos) =>
//     pos == 0 ? word : word[0].toUpperCase() + word.slice(1)
//   )
//   .join('')
// }

// // camelize("background-color") == "backgroundColor";
// // camelize("list-style-image") == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";

// function filterRange(arr, low, high){
//     return arr.filter(item => item >= low && item <= high)
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]

// function filterRangeInPlace(arr, low, high) {
//   for (let pos = 0; pos < arr.length; pos++) {
//     if (arr[pos] < low || arr[pos] > high) {
//       arr.splice(pos, 1);
//       pos--;
//     }
//   }
// }
// let arr = [5, 2, 1, -10, 8];

// arr = arr.sort((a,b) => b - a)

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr){
//  return arr.slice(0).sort()
// }

// let calc = new Calculator();

// alert(calc.calculate("3 + 7"));

// function Calculator(){
//     this.a;
//     this.b;
//     this.operators = {
//         '+': (a, b) =>  a + b,
//         '-': (a, b) => a - b,

//     };

//     this.calculate = function (str){
//         let arr = str.split(' ');
//         let num1 = +arr[0];
//         let num2 = +arr[2];
//         let opp = arr[1];

//         return this.operators[opp](num1, num2)
//     }

//     this.addMethod = function (str, func){
//         this.operators[str] = func;
//     }
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => user.name);

// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(person =>  ({
//     fullName: `${person.name} ${person.surname}`,
//     id: person.id,
// }))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[2].id ) // 1
// alert( usersMapped[2].fullName ) // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// function sortByAge(arr){
//     arr.sort((a,b) => a.age - b.age)
// }

// function shuffle(arr){
//     let maxPos = arr.length;
//     let randomPos = 0;

//     for (let currentPos = 0; currentPos < maxPos; currentPos++) {
//         randomPos = currentPos + Math.random() * (maxPos - currentPos);
//         randomPos = Math.floor(randomPos);

//         let temp = arr[currentPos];
//         arr[currentPos] = arr[randomPos];
//         arr[randomPos] = temp;

//     }

//     console.log(arr)
// }

// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }

// function getAverageAge(users){
//   let sum = 0;
//   sum = users.reduce((aggr, person) => aggr + person.age, 0);
//   return sum / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// alert(getAverageAge(arr));

// function unique(arr) {
//   let special = [];

//   arr.forEach(item => {
//     if (special.indexOf(item) == -1)
//       special.push(item)
//   });

//   return special;
// }

// function groupById(arr) {

//   return arr.reduce((newObj, student) => {
//     newObj[student.id] = student;

//     return newObj;
//   }, {})
// }

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]: function () {
//     return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);

// let entries = Object.fromEntries(recipeMap)

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(arr){
//   let collection = new Map();
//   let sorted;

//   arr.forEach((word) => {
//     sorted = word.toLowerCase().split('').sort().join('');
//     collection.set(sorted, word);
//   });

//   return Array.from(collection.values());
// }

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Error: keys.push is not a function
// keys.push(1, "more")

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function sumSalaries (obj) {
//   let sum = 0;

//   for (let salary of Object.values(obj)) {
//     sum += salary;
//   }

//   return sum;
// }

// let user = {
//   name: "John",
//   age: 30,
// };

// alert(count(user));

// function count(obj){
//   return Object.keys(obj).length;
// }
// let options = {
//   title: "Menu",
// };

// let { width: w = 100, height: h = 200, title: t } = options;

// alert(t); // Menu
// alert(w); // 100
// alert(h);
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size: {
//     width,
//     height,
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu" // not present in the object (default value is used)
// } = options;

// alert(title);  // Menu
// console.log(size);
// alert(item1);  // Cake
// alert(item2);  // Donut
