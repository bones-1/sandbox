export class Slider {
  mouseUp = this.mouseUp.bind(this);
  mouseDown = this.mouseDown.bind(this);
  _moveElem = this._moveElem.bind(this);
  shiftLeft = 0;

  constructor(thumbElem, sliderElem, containerElem) {
    this.c = containerElem;
    this.thumb = thumbElem;
    this.slider = sliderElem;

    this.thumb.addEventListener("mousedown", this.mouseDown);
  }

  mouseDown(event) {
    event.preventDefault();

    this.thumb.style.zIndex = "1000";

    this.thumb.ondragstart = function () {
      return false;
    };

    this.shiftLeft = event.clientX - this.thumb.offsetLeft;

    this.c.addEventListener("mousemove", this._moveElem);
    this.c.addEventListener("mouseup", this.mouseUp);
  }

  mouseUp() {
    this.thumb.style.zIndex = "";
    this.c.removeEventListener("mousemove", this._moveElem);
    this.c.removeEventListener("mouseup", this.mouseUp);
  }

  _moveElem(event) {
    let left = event.clientX - this.shiftLeft - this.slider.offsetLeft;

    this._keepInBounds(left);
  }

  _keepInBounds(xCord) {
    const maxRight = this.slider.offsetWidth - this.thumb.offsetWidth;
    const maxLeft = 0;

    xCord = xCord > maxLeft ? xCord : maxLeft;
    xCord = xCord < maxRight ? xCord : maxRight;

    this.thumb.style.left = xCord + "px";
  }
}
