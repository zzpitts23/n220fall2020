let rainDrops = [];
let groundAlpha = 10;
let rainDropCount = 1;

class RainDrop {
  constructor(color) {
    this.x = 0;
    this.y = random(-50, 0);
    this.color = color || "blue";
    this.size = random(2, 5);
    this.radius = random(windowWidth);
  }

  draw() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  update(callback) {
    // x position follows a circle
    this.x = windowWidth / 115 + this.radius;

    // different size raindrops fall at slightly different y speeds
    this.y += pow(this.size, 0.5);

    // delete raindrops if past end of screen
    if (this.y > height - 40) {
      let index = rainDrops.indexOf(this);
      rainDrops.splice(index, 1);

      callback();
    }
  }
}

class Ground {
  constructor() {
    this.color = "blue";
    this.width = windowWidth;
    this.height = 40;
  }

  draw() {
    fill(0, 63, 253, groundAlpha);
    noStroke();
    rect(0, windowHeight - this.height, this.width, this.height);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let g = new Ground();
  g.draw();

  for (let i = 0; i < 1; i++) {
    rainDrops.push(new RainDrop());
  }

  for (let rainDrop of rainDrops) {
    rainDrop.update(function () {
      rainDropCount++;
    });
    rainDrop.draw();
  }

  if (rainDropCount >= 100 && groundAlpha < 255) {
    console.log("YEET BOYS");
    groundAlpha += 20;
    rainDropCount = 0;
  }
}
