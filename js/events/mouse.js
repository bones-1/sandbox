// Variables in this module 
let tooltip = null;


// Now the functions & helper functions
//
//

// Hightlable Lists
export function hightableList(ulElem, className) {
  let selected = new Set();

  ulElem.addEventListener("click", (e) => {
    let target = e.target;

    if (target.tagName != "LI") {
      return;
    }

    if (e.ctrlKey || e.metaKey) {
      toggleSingle(target, className, selected);
      return;
    }

    if (selected.size) {
      if (selected.size == 1 && target.classList.contains(className)) {
        toggleSingle(target, className, selected);
        return;
      }
      selected.forEach((elem) => elem.classList.remove(className));
      selected.clear();
    }

    toggleSingle(target, className, selected);
  });
}

function toggleSingle(elem, classID, elemSet) {
  if (elemSet.has(elem)) {
    elem.classList.remove(classID);
    elemSet.delete(elem);
  } else {
    elem.classList.add(classID);
    elemSet.add(elem);
  }
}

// Tooltips
export function showTooltip(event) {
  if (!Object.hasOwn(event.target.dataset, "tooltip")) {
    return;
  }

  let tooltip = createTooltip(event);
  document.body.append(tooltip);

  let tooltipMeasurements = tooltip.getBoundingClientRect();
  let targetMeasurements = event.target.getBoundingClientRect();

  if (targetMeasurements.top - 5 - tooltipMeasurements.height > 0) {
    event.target.before(tooltip);

    tooltip.style.top =
      event.target.offsetTop - tooltipMeasurements.height - 5 + "px";
  } else {
    event.target.after(tooltip);

    tooltip.style.top =
      event.target.offsetTop + targetMeasurements.height + 5 + "px";
  }

  let tooltipLeft =
    targetMeasurements.left +
    targetMeasurements.width / 2 -
    tooltipMeasurements.width / 2;

  tooltipLeft = tooltipLeft > 0 ? tooltipLeft : targetMeasurements.left;
  tooltip.style.left = tooltipLeft + "px";
}

export function removeTooltip() {
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }
}

function createTooltip(event) {
  tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.innerHTML = event.target.dataset.tooltip;

  return tooltip;
}
