let table = document.getElementById("bagua-table");

/* your code */

let elem, prevContent, isActive;
const area = document.createElement("textarea");

table.addEventListener("click", (e) => {
  if (isActive) return;

  elem = e.target.closest("td");

  if (elem === null) return;

  isActive = true;
  area.tabIndex = -1;
  area.style.height = getComputedStyle(elem).height;

  prevContent = area.value = elem.innerHTML;

  elem.replaceWith(area);
  area.focus();

  addOptions(area);
});

function addOptions(elem) {
  elem.insertAdjacentHTML(
    "afterend",
    '<span class="options"><input type="button" value="Confirm"><input type="button" value="Cancel"></span>'
  );

  let eCords = elem.getBoundingClientRect();
  let buttons = document.querySelector(".options");

  buttons.setAttribute(
    "style",
    `transform: translate(-${eCords.width}px, ${
      eCords.height + buttons.offsetHeight
    }px)`
  );

  buttons.addEventListener("click", (e) => {
    if (e.target.value == "Confirm") {
      _makeChange();
    } else {
      _cancelChange();
    }
    buttons.remove();
    isActive = false;
  });
}

function _makeChange() {
  elem.innerHTML = area.value;
  area.replaceWith(elem);
}

function _cancelChange() {
  elem.innerHTML = prevContent;
  area.replaceWith(elem);
}

navigator.clipboard.addEventListener("clipboardchange", function(){ console.log('I smell new food!')});
