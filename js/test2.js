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

for (let x of document.body.querySelectorAll('a[href]')){
  let link = x.getAttribute('href');
  if (link.includes('://') && ! link.startsWith('http://internal.com')) {
    x.style.color = 'orange';
  }
}

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong>Hi there!</strong> You've read another important message.";

document.body.append(div);
