"use strict";

let alert = console.log;

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

// let user = { name: "John", years: 30 };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// function topSalary(salaries = {}) {
//   let employees = Object.entries(salaries);
//   let result;

//   if (employees.length == 0) return null;

//   result =  employees.reduce((topEmployee, employee) =>
//     topEmployee[1] > employee[1] ? topEmployee : employee
//   );

//   return result[0];
// let topEmployee = employees.pop();

// for (let [employee, salary] of employees){
//   topEmployee = salary > topEmployee[1] ? [employee, salary] : topEmployee;
// }

// return topEmployee[0];
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(topSalary(salaries));

// 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date();
// alert( Jan01_1970 );

// // now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date (24 * 3600 * 1000);
// alert( Jan02_1970 );

// let start = Date.now(); // milliseconds count from 1 Jan 1970

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // done

// alert(`The loop took ${end - start} ms`);

// let date = new Date(2012,1,20,3,12);
// console.log(date);

// function getWeekDay(date) {
//   let day = date.getDay();
//   let weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

//   return weekdays[day];
// }

// let date = new Date(2012, 0, 3); // 3 Jan 2012
// alert(getWeekDay(date));

// function getDateAgo(date, days){
//   let copyDate = new Date(date.getTime());
//   copyDate.setDate(copyDate.getDate() - days);
//   return copyDate.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month){
//   return new Date(year, month + 1, 0).getDate();
// }
// getLastDayOfMonth(2012, 1);

// function getSecondsToday(){
//   let diff = Date.now() - new Date().setHours(0,0,0,0);
//   return Math.floor(diff/1000);
// }

// console.log(getSecondsToday());

// function getSecondsToTomorrow() {
//   let now = new Date();
//   let [tomorrowYear, tomorrowMonth, tomorrowDate] = [
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1,
//   ];

//   let tomorrow = new Date(tomorrowYear, tomorrowMonth, tomorrowDate);

//   return Math.floor((tomorrow - now) / 1000);
// }

// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//   let timeDifference = Math.floor((Date.now() - date) / 1000);

//   if (timeDifference < 1) {
//     return "right now";
//   } else if (timeDifference < 60) {
//     return `${timeDifference} sec. ago`;
//   } else if (timeDifference < 60 * 60) {
//     return `${timeDifference / 60} min. ago`;
//   }

//   date = [
//     "0" + date.getDate(),
//     "0" + (date.getMonth() + 1),
//     "0" + date.getYear(),
//     "0" + date.getHours(),
//     "0" + date.getMinutes(),
//   ].map((element) => element.slice(-2));

//   return date.slice(0, 3).join(".") + " " + date.slice(3).join(":");
// }

// alert(formatDate(new Date(new Date() - 1))); // "right now"

// alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

// alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// // yesterday's date like 31.12.2016 20:00
// alert(formatDate(new Date(new Date() - 86400 * 1000)));

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };

// alert(
//   JSON.stringify(user, (key, value) =>
//     value === true ? 1 : value === false ? 0 : value
//   )
// );

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str,(key, value) => (key ==='date') ? new Date(value) : value);

// alert( meetup.date.getDate() ); // now works!

// let user = {
//   name: "John Smith",
//   age: 35,
// };

// console.log (JSON.parse(JSON.stringify(user)));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{name: "John"}, {name: "Alice"}],
//   place: room
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log( JSON.stringify(meetup,  (key, value) => {
//   return (value === meetup && key !== '') ? undefined : value
// }, 2));

// /* result should be:
// {
//   "title":"Conference",
//   "occupiedBy":[{"name":"John"},{"name":"Alice"}],
//   "place":{"number":23}
// }
// */

// function sumTo(num){
//   if (num == 1){
//     return 1;
//   }

//   return sumTo(num - 1) + num;
// }

// alert( sumTo(100) ); // 5050

// function makeCounter(){
//   let count = 0;

//   return function(){
//     return count++;
//   }
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter2());

// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }

// let g = f();
// g();

// function sum(num1){
//   return function(num2){
//     return num1 + num2;
//   }
// }

// function inBetween(a, b){
//   return function (value){
// return value >= a && value <= b;
//   }
// }

// function inArray(arr){
//   return function(value){
//     return arr.includes(value)
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// function byField(property){
//   return function(x, y){
//     return (x[property] > y[property]) ? 1 : -1;
//   }
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// users.sort(byField("name"));
// users.sort(byField("age"));

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//    let shooterID = i;
//     let shooter = function() { // create a shooter function,

//       alert( shooterID ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

// function makeCounter() {

//   let count = 10;

//   function counter() {
//     return count++;
//   };

//   counter.set = value => count = value;
//   counter.decrease = () => count--;

//   return counter;
// }

// let counter = makeCounter();

// counter.count = 10;
// alert( counter() ); // 10

// let callback = function () {
//   let count = 0;
//   return (message) =>
//   console.log((count+=1) + message)
//   };

// let timerID = setInterval(callback(), 60000, " minute(s) have passed.");

// setTimeout(() => clearInterval(timerID),5 * 60002)

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember delay from the previous call

//   if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
//   else setTimeout(run); // else re-schedule
// });

// function count(multiplier) {
//   let total = multiplier;
//   for (let i = 0; i < total; i++) {
//     console.log(Math.floor(Math.random()*1000));
//   }
//   return "Processing done.";
// }

// function countDecorator(func) {
//   let cache = new Map();

//   return function (multiplier) {
//     if (cache.has(multiplier)) {
//       return cache.get(multiplier);
//     }

//     let result = func(multiplier);

//     cache.set(multiplier, result);
//     return result;
//   };
// }

// count = countDecorator(count);

// console.log(count(5));
// console.log(count(6));
// console.log(count(5));
// console.log(count(9));

// we'll make worker.slow caching
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // scary CPU-heavy task here
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// // same code as before
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(...args) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, ...args); // (**)
//     cache.set(x, result);
//     return result;
//   };
// }

// alert( worker.slow(1) ); // the original method works

// worker.slow = cachingDecorator(worker.slow); // now make it caching

// alert( worker.slow(2) );

// function work(a, b) {
//   alert(a + b); // work is an arbitrary function or method
// }

// function spy(func){

// let wrapper = function this_func (...args) {
//     this_func.calls.push(args);

//     return func.apply(this, args);
//   }
//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// function delay(f, ms) {

//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//     console.log(this)
//   };

// }

// let f1000 = delay(alert, 1000);

// f1000("test"); // shows "test" after 1000ms

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(this), user.loginFail.bind(this));

// let user = {
//   name: "John",
//   surname: "Smith",
//   set fullName (value){
//     [this.name, this.surname] = value.split(' ');
//   },
//   get fullName (){
//     return this.name + ' ' + this.surname;
//   },
// };

// console.log(user.fullName);
// user.fullName = 'Douglas Campbell';
// console.log(user.fullName);

// let man ={
//   'walk': true,
// }

// let man2 = {
//   'walk': false,
// };

// man2.__proto__ = man;

// console.log(man2);
// delete man2.walk;
// console.log(man2);

// let hamster = {

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster,
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// function Rabbit (){}
// Rabbit.prototype = {
//   'eats': true,
// }

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats);\

// Function.prototype.defer = function(delay){
//   setTimeout(this, delay);
// }

// function f() {
//   alert("Hello!");
// }

// f.defer(3000);

// Function.prototype.defer = function (delay){
//   let thisArg = this;
//   return function func (...args){
//     console.log(func.__proto__ == Function.__proto__)
//     setTimeout(f.apply(thisArg, args), delay)
//   }
// }

// function f(a, b) {
//   alert(a + b);
// }

// f.defer(1000)(1, 2);

// let dictionary = Object.create(null);
// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";
// dictionary.pear = "pear";

// // only apple and __proto__ are in the loop

// Object.defineProperty(dictionary,'toString', {
//   value() {return Object.keys(this).join()},
//   enumerable: false,
// })
// // your toString in action
// console.log(dictionary + '')

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

// let a = new User('Jane');

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render () {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   };

//   stop () {
//     clearInterval(this.timer);
//   };

//   start () {
//     this.render();
//     this.timer = setInterval(() => this.render(), 60000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speed = 0;

//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} runs with speed ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} stands still.`);
//   }
// }

// class Rabbit extends Animal {
//   hide(){
//     alert(`${this.name} hides.`);
//   }

//   stop(){
//     super.stop();
//     this.hide();
//   }
// }

// let rabbit = new Rabbit();

// let animal = {
//   name: "Animal",
//   eat() {
//     // animal.eat.[[HomeObject]] == animal
//     alert(`${this.name} eats.`);
//   },
// };

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   constructor(template, precision) {
//     super(template);
//     this.precision = precision;
//   }

//    start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// let clock = new ExtendedClock({ template: "h:m:s" }, 60000);

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// alert(rabbit.hasOwnProperty("name"));

// class CoffeeMachine {
//   constructor(power) {
//     this._power = power;
//   }

//   get power (){
//     return this._power;
//   }

//   #waterAMount = 0;
//   #waterLimit = 200;

//   #fixWaterLimit(value){
//     if (value < 0 ) return 0;
//     if (value > this.#waterLimit) return this.#waterLimit;
//     return value;
//   }

//   setWaterAmount(value) {
//     this.#waterAMount = this.#fixWaterLimit(value);
//   }

//   getWaterAmount() {
//     return this.#waterAMount;
//   }
// }

// let cup = new CoffeeMachine();
// cup.setWaterAmount(800);
// console.dir(cup);

// let sayMixin = {
//   say(phrase) {
//     alert(
//       phrase + ": I would say that this is a method of encapsulation, yes?"
//     );
//   },
//   sayHi() {
//     alert(`Hello ${this.name}`);
//   },
//   sayBye() {
//     alert(`Bye ${this.name}`);
//   },
// };

// let sayInterface = {
//   __proto__: sayMixin,

//   sayBye() {
//     super.sayBye();
//   },

//   sayHi() {
//     super.sayHi();
//   },

//   say(phrase) {
//     super.say(phrase);
//   },
// };

// // usage:
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // copy the methods
// Object.assign(User.prototype, sayInterface);

// // now User can say hi
// let user = new User("Dude"); // Hello Dude!
