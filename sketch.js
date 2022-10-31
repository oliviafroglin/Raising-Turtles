let raccoon;
let egg;
let raccoons = [];
let eggs = [];
let raccoonRight;

function preload() {
  raccoon = loadImage("images/jump0001.png");
  raccoonRight = loadImage("images/racRight.png");
  egg = loadImage("images/egg.png");
}
function setup() {
  createCanvas(1200, 800);

  // console.log(raccoons);
}
function draw() {
  noStroke();
  frameRate(40);
  // background("grey");
  if (frameCount % 200 == 0) {
    let tmpRaccoon = new Raccoon();
    raccoons.push(tmpRaccoon);
  }
  if (frameCount % 400 == 0) {
    let tmpEgg = new Egg();
    eggs.push(tmpEgg);
  }
  console.log(eggs);
  for (let i = 0; i < raccoons.length; i++) {
    raccoons[i].display();
    raccoons[i].move();
  }
  for (let j = 0; j < eggs.length; j++) {
    eggs[j].display();
  }
}
class Raccoon {
  constructor() {
    this.direction = random(["left", "right"]);
    this.x = -240;
    this.y = 600;
    if (this.direction == "left") {
      this.x = -230;
    } else if (this.direction == "right") {
      this.x = 1240;
    }
  }
  display() {
    if (this.direction == "left") {
      image(raccoon, this.x, this.y, 200, 200);
    } else if (this.direction == "right") {
      image(raccoonRight, this.x, this.y, 200, 200);
    }
  }
  move() {
    if (this.direction == "left") {
      this.x += 3;
    } else if (this.direction == "right") {
      this.x -= 3;
    }
  }
}
class Egg {
  constructor() {
    this.x = random(50, 1050);
    this.y = random(600, 700);
  }
  display() {
    image(egg, this.x, this.y, 50, 50);
  }
}
