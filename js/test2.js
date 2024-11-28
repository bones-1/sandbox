"use strict";

import * as mouse from "./modules.js";
// function qSelector(css) {
//   if (typeof css !== "string") throw SyntaxError("Argument must be CSS string");

//   let elem = document.querySelector(css);
//   if (elem) {
//     elem.style.backgroundColor = "red";
//     setTimeout(() => (elem.style.backgroundColor = ""), 3000);
//   } else {
//     throw Error("No such elemement found.");
//   }
// }

// let table = document.getElementById("age-table");
// let elemList = document.querySelectorAll("table label");

// let tableRows = Array.from(table.rows);

// let result = tableRows.reduce((row) => {
//   for (let cell of row.cells) {
//     if (cell.innerHTML.includes("Age")) return cell;
//   }
// });

// console.log(result.innerHTML)
// let form = document.querySelector('form[name="search"')
// let ans = form.querySelector(':last-child');

// const items = document.querySelectorAll('li');

// let counter = new Map;
// let count;
// let elem;
// for(let x of items){
//   count =  x.querySelectorAll('li').length;
//   elem = x.firstChild.data.trim();
//   if (counter.has(elem)) { counter.set(elem, counter.get(elem) + count)}
//   else {counter.set(elem, count)}
// }

// for(let x of counter.entries()){
//   console.log(`${x[0]}: ${x[1]}`)
// }

// for (let x of document.body.querySelectorAll('a[href]')){
//   let link = x.getAttribute('href');
//   if (link.includes('://') && ! link.startsWith('http://internal.com')) {
//     x.style.color = 'orange';
//   }
// }

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong>Hi there!</strong> You've read another important message.";

// document.body.prepend(div);
// const div2 = div.cloneNode(true);
// div2.querySelector('strong').textContent = 'Bye there!';

// document.body.append(div2);

// function removeDiv(){
//   let div = document.querySelector('ul > div');
//   let parent = div.parentElement;
//   let fragment = new DocumentFragment();

//   console.time('loop');
//   for(let child of div.children){
//     console.count('item #');
//     fragment.append(child.cloneNode())
//   }
//   console.timeEnd('loop');

//   div.remove();
//   parent.append(fragment);
// }

// function clear(elem){
//   elem.innerHTML = '';
// }

// const ul = document.querySelector('.user-list');

// let response;
// let item;
// while(response = prompt('Item to add: ')){
//   item = document.createElement('li');
//   item.textContent = response;
//   ul.append(item);
// }

function createTree(container, data) {
  for (let key in data) {
    let li = document.createElement("li");
    li.innerHTML = `<span>${key}</span>`;

    if (Object.keys(data[key]).length != 0) {
      let nestedList = document.createElement("ul");
      li.append(nestedList);
      createTree(nestedList, data[key]);
    }

    container.append(li);
  }
}

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

let container = document.querySelector(".listing");
createTree(container, data);

function countItems(target) {
  let nestedLists = target.querySelectorAll("li:has(> ul)");

  for (let node of nestedLists) {
    let count = node.querySelectorAll("li").length;
    node.firstChild.textContent += `[${count}]`;
  }
}

countItems(document.querySelector(".main"));

function createCalendar(elem, year, month) {
  // make month value array-correct
  month = month - 1;

  const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const monthString = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let startDay = new Date(year, month, 1).getDay() - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cal = document.createElement("table");
  cal.innerHTML = `
  <caption><span class='month'>${monthString[month]}</span><span class='year'>${year}</span></caption>
  <thead>
  <tr>
  </tr>
  </thead>
  <tbody>
  <tr></tr>
  </tbody>
  `;

  let currentRow = cal.querySelector("thead tr");

  for (let x = 0; x < 7; x++) {
    currentRow.insertAdjacentHTML("beforeend", `<th>${weekdays[x]}</th>`);
  }

  currentRow = cal.querySelector("tbody > tr");

  startDay = startDay < 0 ? 6 : startDay;
  appendBlankCells(currentRow, 0, startDay);

  let pos = startDay;
  for (let count = 1; count <= daysInMonth; count++, pos++) {
    if (pos >= 7) {
      currentRow = document.createElement("tr");
      cal.querySelector("tbody").append(currentRow);
      pos = 0;
    }

    currentRow.insertAdjacentHTML("beforeend", `<td>${count}</td>`);
  }

  appendBlankCells(currentRow, pos, 7);
  markToday(cal);

  elem.innerHTML = cal.outerHTML;
}

function appendBlankCells(row, start, end) {
  let elem;
  while (start < end) {
    elem = document.createElement("td");
    elem.className = "placeholder";
    row.append(elem);
    start++;
  }
}

function markToday(elem) {
  let today = new Date().getDate();
  let allCells = elem.querySelectorAll("td");

  for (let cell of allCells) {
    if (cell.textContent == today) {
      cell.classList.toggle("today");
      break;
    }
  }
}

let calElem = document.querySelector(".calendar");
createCalendar(calElem, 2024, 10);

let userData = Array.from(document.querySelector(".users tbody").children);
// console.log(userData);
userData.sort((x, y) =>
  x.firstElementChild.textContent.localeCompare(y.firstElementChild.textContent)
);

document.querySelector(".users tbody").append(...userData);

function showNotification({
  top = 10,
  right = 10,
  html = "Hello",
  className = "welcome",
}) {
  // document.body.style.position = 'relative';
  let div = document.createElement("div");
  div.setAttribute(
    "style",
    `position: absolute; top: ${top}px; right: ${right}px; height: 30px; width: 50px; background-color: red; color: yellow; text-align: center; line-height: 30px; `
  );
  div.classList.toggle(className);
  div.textContent = html;

  document.body.append(div);
  setTimeout(() => div.remove(), 1500);
}

showNotification({});

async function autoscroll() {
  let elem = document.querySelector("#example");
  let padding = Number.parseInt(getComputedStyle(elem).padding);
  let view = elem.scrollHeight - elem.clientHeight - padding;

  while (elem.scrollTop < view) {
    await new Promise((resolve) =>
      setTimeout(() => {
        elem.scrollTop++;
        resolve(elem.scrolltop);
      }, 25)
    );
  }
}

autoscroll();

function centerImage() {
  const field = document.querySelector("#field");
  const img = document.querySelector("#ball");

  img.style.top = `${Math.round(
    field.clientHeight / 2 - img.offsetHeight / 2
  )}px`;
  img.style.left = `${Math.round(
    field.clientWidth / 2 - img.offsetHeight / 2
  )}px`;
}

centerImage();

let box = document.querySelector("#example");

async function reshape() {
  let width = box.getBoundingClientRect().width;
  for (let x = 500; width < x; width++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        box.style.width = `${width++}px`;
        resolve(true);
      }, 1);
    });
  }
}

// reshape();

function positionAt(anchor, position, elem) {
  let apos = anchor.getBoundingClientRect();
  let epos = elem.getBoundingClientRect();

  elem.style.position = "absolute";

  switch (position) {
    case "top-out":
      elem.style.top = apos.top - epos.height - 1 + "px";
      elem.style.left = apos.left + "px";
      break;

    case "right-out":
      elem.style.left = apos.right + 1 + "px";
      elem.style.top = apos.top + "px";
      break;

    case "bottom-out":
      elem.style.top = apos.bottom + 1 + "px";
      elem.style.left = apos.left + "px";
      break;
    case "top-in":
      elem.style.top = apos.top + anchor.clientTop + 1 + "px";
      elem.style.left = apos.left + anchor.clientLeft + 1 + "px";
      break;

    case "right-in":
      elem.style.left =
        apos.left +
        anchor.clientLeft +
        anchor.clientWidth -
        epos.width -
        1 +
        "px";
      elem.style.top = apos.top + anchor.clientTop + 1 + "px";
      break;

    case "bottom-in":
      elem.style.top =
        apos.top +
        anchor.clientTop +
        anchor.clientHeight -
        epos.height -
        1 +
        "px";
      elem.style.left = apos.left + anchor.clientLeft + "px";
      break;
  }
}

function heart() {
  let elem = this;
  if (elem.querySelector(".heart")) return;

  let tag = document.createElement("span");
  tag.className = "heart";
  tag.textContent = "\u{1F495}";
  elem.append(tag);
  setTimeout(() => tag.remove(), 2000);
}

function makeHugs() {
  let elem = document.createElement("div");
  elem.setAttribute(
    "style",
    "height: max-content; width: max-content; padding: 0 5px; background-color: yellow; color: black; text-align: center;"
  );
  elem.addEventListener("mouseover", heart);
  elem.textContent = "I luv hugs!\u{1F43B}";
  document.body.append(elem);

  return elem;
}

box = document.querySelector("#example");

positionAt(box, "right-out", makeHugs());
positionAt(box, "bottom-out", makeHugs());
positionAt(box, "top-out", makeHugs());
positionAt(box, "right-in", makeHugs());
positionAt(box, "bottom-in", makeHugs());
positionAt(box, "top-in", makeHugs());

const button = document.querySelector("#hider");

function hide(event) {
  event.currentTarget.previousElementSibling.hidden = true;
}

button.addEventListener("click", hide);

const button2 = document.getElementById("hide-self");

button2.addEventListener(
  "click",
  (event) => (event.currentTarget.hidden = true)
);

document.getElementById("field2").onclick = function (event) {
  const fieldPos = event.currentTarget.getBoundingClientRect();
  const ball = document.getElementById("ball2");
  const height = ball.offsetHeight / 2;
  const width = ball.offsetWidth / 2;
  const mouseY = event.clientY - fieldPos.top - event.currentTarget.clientTop;
  const mouseX = event.clientX - fieldPos.left - event.currentTarget.clientLeft;

  let coords = makeWithinBorders({
    top: mouseY - height,
    left: mouseX - width,
    container: event.currentTarget,
    elem: ball,
  });

  ball.style.top = coords.top + "px";
  ball.style.left = coords.left + "px";
};

function makeWithinBorders({ top, left, elem, container }) {
  if (top < 0) top = 0;

  if (left < 0) left = 0;

  if (top > container.clientHeight - elem.offsetHeight)
    top = container.clientHeight - elem.offsetHeight;

  if (left > container.clientWidth - elem.offsetWidth)
    left = container.clientWidth - elem.offsetWidth;

  return { top: top, left: left };
}

const wrapper = document.querySelector(".list-wrapper");
wrapper.firstElementChild.addEventListener("click", () => {
  wrapper.lastElementChild.classList.toggle("hidden");
  wrapper.firstElementChild.classList.toggle("expanded");
});

let rows = document.querySelectorAll(".pane-list .pane");
for (let pane of rows) {
  pane.insertAdjacentHTML(
    "afterbegin",
    "<input type='button' class='remove-button' value='[x]'></input>"
  );

  // pane.firstElementChild.onclick = function (event) {
  //   event.currentTarget.parentElement.remove();
  // };
}

const UL = document.querySelector(".carousel ul");
const IMG_WIDTH = Number.parseInt(getComputedStyle(UL.firstElementChild).width);
const CLIENT_WIDTH = IMG_WIDTH * 3;

UL.style.cssText = `left: 0px; width: ${CLIENT_WIDTH}px`;
let rightOffset = UL.scrollWidth - UL.clientWidth;

function shiftRight() {
  if (rightOffset > 0) {
    if (rightOffset <= CLIENT_WIDTH) {
      UL.style.left = Number.parseInt(UL.style.left) - rightOffset + "px";
      rightOffset = 0;
    } else {
      UL.style.left = Number.parseInt(UL.style.left) - CLIENT_WIDTH + "px";
      rightOffset -= CLIENT_WIDTH;
    }
  }
}

function shiftLeft() {
  if (rightOffset + CLIENT_WIDTH < UL.scrollWidth) {
    let leftOffset = UL.scrollWidth - rightOffset - CLIENT_WIDTH;

    if (leftOffset < CLIENT_WIDTH) {
      UL.style.left = Number.parseInt(UL.style.left) + leftOffset + "px";
      rightOffset += leftOffset;
    } else {
      UL.style.left = Number.parseInt(UL.style.left) + CLIENT_WIDTH + "px";
      rightOffset += CLIENT_WIDTH;
    }
  }
}

document.querySelector(".left-end").addEventListener("click", shiftLeft);
document.querySelector(".right-end").addEventListener("click", shiftRight);

async function highlight() {
  await new Promise((resolve) => {
    let target = event.target;
    if (target.tagName == "DIV") {
      target.classList.toggle("highlight");

      setTimeout(() => {
        target.classList.toggle("highlight");
        resolve(true);
      }, 2000);
    }
  });
}

let panes = document.querySelector(".pane-list");
panes.addEventListener("click", function (event) {
  if (!event.target.classList.contains("remove-button")) {
    return;
  }

  let pane = event.target.closest(".pane");
  if (panes.contains(pane)) {
    pane.remove();
  }
});

function makeCollapsableList(elem) {
  if (!(elem.tagName == "OL" || elem.tagName == "UL")) {
    throw TypeError("Accepts list elements.");
  }

  let hidden = false;

  elem.addEventListener("click", function (event) {
    if (!event.target.tagName == "SPAN") {
      return;
    }

    if (!hidden && event.target.nextSibling?.tagName == "UL") {
      event.target.nextSibling.hidden = true;
      event.target.style.fontWeight = "bold";
      hidden = true;
    } else if (hidden && event.target.nextSibling?.tagName == "UL") {
      event.target.nextSibling.hidden = false;
      event.target.style.fontWeight = "";
      hidden = false;
    }
  });
}

let main = document.querySelector(".listing");
makeCollapsableList(main);

let grid = document.querySelector("#grid");
grid.addEventListener("click", function (event) {
  if (event.target.tagName != "TH" && !grid.contains(event.target)) {
    return;
  }

  let rows = grid.querySelector("tbody").rows;
  rows = Array.from(rows);

  if (event.target.dataset.type == "number") {
    rows.sort((a, b) => a.cells[0].textContent - b.cells[0].textContent);

    grid.querySelector("tbody").append(...rows);
    return;
  }

  if (event.target.dataset.type == "string") {
    rows.sort((a, b) =>
      a.cells[1].textContent.localeCompare(b.cells[1].textContent)
    );

    grid.querySelector("tbody").append(...rows);
    return;
  }
});

// new mouse.SmartTooltips(document.body);

// document.body.addEventListener("click", function (event) {
//   let linkElem = event.target.closest("a");

//   if (!(linkElem && linkElem.contains(event.target))) return;

//   if (!confirm(`Leave for ${linkElem.getAttribute("href")} ?`))
//     event.preventDefault();
// });

document.querySelector("#thumbs").addEventListener("click", function (event) {
  let thumbnail = event.target.closest("a");
  let largeImage = document.querySelector("#largeImg");

  largeImage.src = thumbnail.href;
  largeImage.alt = thumbnail.title;
  event.preventDefault();
  event.stopPropagation();
});

let testButton = document.querySelector("#test-button");

let lastClick = 0;

testButton.addEventListener("click", function (e) {
  if (e.timeStamp - lastClick > 500) {
    lastClick = e.timeStamp;
    return;
  }

  let evt = new MouseEvent("custom:doubleClick", { bubbles: true });

  e.target.dispatchEvent(evt);
});

testButton.addEventListener("custom:doubleClick", (e) => {
  artist.notify("What is love?");
});

class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(...args) {
    this.subscribers.push(...args);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((func) => func !== fn);
  }

  notify(data) {
    this.subscribers.forEach((fn) => fn.update(data));
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  update(info) {
    console.log(
      `Hi ${this.name}. The albulm with the title "${info}" has been released!`
    );
  }
}

let artist = new Observer();
let pam = new Person("Pam");
let john = new Person("John");
let tony = new Person("Tony");

artist.subscribe(pam, john, tony);
artist.unsubscribe(john);

testButton.addEventListener("click", (e) => {
  if (e.shiftKey) {
    console.dir(e);
  }
});

let ulList = document.querySelector("#selectable-list");
let selectable = new mouse.Selectable(ulList, "highlight");
selectable.makeSelectable();

ulList.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

let c = document.querySelector(".test-container");
let b = document.querySelector(".test-container .ball");
let m = document.querySelector(".test-container .mouse");

b.addEventListener("click", (e) => {
  console.log(e.clientX);
  m.style.left =
    e.clientX - b.getBoundingClientRect().left - m.offsetWidth / 2 + "px";
  m.style.top =
    e.clientY - b.getBoundingClientRect().top - m.offsetHeight / 2 + "px";
});

import { Slider} from "./modules.js";

new Slider(
  document.querySelector(".thumb"),
  document.querySelector(".slider"),
  document.querySelector(".test-container")
);

