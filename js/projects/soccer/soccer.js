// TODO Elements should be positioned absolute and not fixed!
// TODO: Dragdown does not work, especially with ball
class Draggable {
  onMouseDown = this.onMouseDown.bind(this);
  mouseUp = this.mouseUp.bind(this);
  moveElem = this.moveElem.bind(this);
  _moveTo = this._moveTo.bind(this);

  shiftLeft;
  shiftTop;
  prevX = 0;
  prevY = 0;

  constructor(elem, container) {
    this.elem = elem;
    this.container = container;

    elem.addEventListener("mousedown", this.onMouseDown);
  }

  onMouseDown(event) {
    // Stationary on initial click
    this.elem.style.left = event.target.getBoundingClientRect().x + "px";
    this.elem.style.top = event.target.getBoundingClientRect().y + "px";

    // Prepare for moving
    this.elem.style.zIndex = "1000";
    this.elem.style.float = "";
    this.elem.style.position = "fixed";

    this.container.addEventListener("mousemove", this.moveElem);
    this.container.addEventListener("mouseup", this.mouseUp);

    this.shiftLeft = event.clientX - this.elem.offsetLeft;
    this.shiftTop = event.clientY - this.elem.offsetTop;
  }

  moveElem(event) {
    this.container.addEventListener("dragstart", (event) =>
      event.preventDefault()
    );

    this._moveTo(event.clientX, event.clientY);
  }

  mouseUp() {
    this.elem.style.zIndex = "";

    this.container.removeEventListener("mousemove", this.moveElem);
    this.container.removeEventListener("mouseup", this.mouseUp);
  }

  _moveTo(xCord, yCord) {
    const eCords = this.elem.getBoundingClientRect();
    const windowBottom = document.documentElement.clientHeight;
    let x = xCord - this.shiftLeft;
    let y = yCord - this.shiftTop;

    // Hero does not go above top border
    if (y <= this.prevY) {
      window.scrollTo({ top: yCord, behavior: "smooth" });
      this.prevY = y;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > windowBottom && y >= this.prevY) {
      window.scrollTo({ top: yCord });
      console.log(yCord);
    }
    if (y + eCords.height > windowBottom) {
      y = windowBottom - eCords.height;
    }

    this.elem.style.transform = `translate(${x}px,${y}px)`;
  }
}

const heroes = Array.from(document.querySelectorAll(".draggable"));
heroes.forEach((hero) => new Draggable(hero, document.body));

function runOnKeys(func, ...code) {
  let pressed = new Set();

  document.body.addEventListener("keydown", (e) => {
    if (!code.includes(e.code)) {
      return;
    }

    pressed.add(e.code);

    if (pressed.size >= code.length) {
      func();
      // pressed.clear();
    }
  });

  document.body.addEventListener("keyup", (e) => {
    pressed.delete(e.code);
  });
}

runOnKeys(() => console.log("Hello!"), "KeyQ", "KeyW");
