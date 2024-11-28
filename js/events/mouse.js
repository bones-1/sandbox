// Hightlable Lists
export class Selectable {
  constructor(ulElem, className) {
    this.ulElem = ulElem;
    this.className = className;
  }

  makeSelectable() {
    let selected = new Set();

    this.ulElem.addEventListener("click", (e) => {
      let target = e.target;

      if (target.tagName != "LI") {
        return;
      }

      if (e.ctrlKey || e.metaKey) {
        this._toggleSingle(target, this.className, selected);
        return;
      }

      if (selected.size) {
        if (selected.size == 1 && target.classList.contains(this.className)) {
          this._toggleSingle(target, this.className, selected);
          return;
        }
        selected.forEach((elem) => elem.classList.remove(this.className));
        selected.clear();
      }

      this._toggleSingle(target, this.className, selected);
    });
  }

  _toggleSingle(elem, classID, elemSet) {
    if (elemSet.has(elem)) {
      elem.classList.remove(classID);
      elemSet.delete(elem);
    } else {
      elem.classList.add(classID);
      elemSet.add(elem);
    }
  }
}

// Tooltips
export class Tooltips {
  tooltip = null;
  tooltipMeasurements;
  targetMeasurements;

  constructor(className) {
    this.classId = className;
  }

  removeTooltip = this.removeTooltip.bind(this);

  showTooltip(elem) {
    // Tooltip test is already done by subclass(s)
    // if (!this._isTooltip(this.elem)) return;

    this._createTooltip(elem);
    document.body.append(this.tooltip);

    this.tooltipMeasurements = this.tooltip.getBoundingClientRect();
    this.targetMeasurements = elem.getBoundingClientRect();

    this._verticallyPosiiton(elem);
    this._horizontallyPosition();
  }

  removeTooltip() {
    if (this.tooltip) {
      this.tooltip.remove();
      this.tooltip = null;
    }
  }

  _createTooltip(elem) {
    this.tooltip = document.createElement("span");
    this.tooltip.className = this.classId;
    this.tooltip.innerHTML = elem.dataset.tooltip;
  }

  _verticallyPosiiton(elem) {
    if (this.targetMeasurements.top - 5 - this.tooltipMeasurements.height > 0) {
      elem.before(this.tooltip);

      this.tooltip.style.top =
        elem.offsetTop - this.tooltipMeasurements.height - 5 + "px";
    } else {
      elem.after(this.tooltip);

      this.tooltip.style.top =
        elem.offsetTop + this.targetMeasurements.height + 5 + "px";
    }
  }

  _horizontallyPosition() {
    let tooltipLeft =
      this.targetMeasurements.left +
      this.targetMeasurements.width / 2 -
      this.tooltipMeasurements.width / 2;

    tooltipLeft = tooltipLeft > 0 ? tooltipLeft : this.targetMeasurements.left;
    this.tooltip.style.left = tooltipLeft + "px";
  }

  // _isTooltip(elem) {
  //   return Object.hasOwn(elem.dataset, "tooltip");
  // }
}

export class SmartTooltips extends Tooltips {
  constructor(
    elem,
    { tooltipClassName = "tooltip", dataAttr = "tooltip" } = {}
  ) {
    super(tooltipClassName);

    this.dataAttr = dataAttr;
    elem.addEventListener("mouseover", this.over);
    elem.addEventListener("mouseout", this.out);
  }

  over = this.over.bind(this);
  out = this.out.bind(this);

  sameElement = null;
  timeoutPID = null;

  over(event) {
    let target = event.target;
    let parentTooltip = this._getParentTooltip(target);

    if (!parentTooltip) {
      return;
    }

    if (parentTooltip == this.sameElement) {
      return;
    }

    this.timeoutPID = setTimeout(() => {
      this.showTooltip(target);
      this.sameElement = parentTooltip;
    }, 1000);
  }

  out(event) {
    let nextElem = this._getParentTooltip(event.relatedTarget);
    let prevElem = this._getParentTooltip(event.target);

    // console.log(parentTooltip);
    if (nextElem == null && this.sameElement == null) {
      return;
    }

    if (nextElem == this.sameElement) {
      return;
    }

    console.log(this.timeoutPID);

    if (this.timeoutPID != null) {
      clearTimeout(this.timeoutPID);
      this.timeoutPID = null;
    }

    this.timeoutPID = this.sameElement = null;
    this.removeTooltip();
  }

  _getParentTooltip(elem) {
    return elem?.closest(`[data-${this.dataAttr}]`);
  }
}
