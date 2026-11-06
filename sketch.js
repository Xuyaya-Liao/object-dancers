/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Seal(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Seal {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    translate(
      map(sin(frameCount * 0.005), -1, 1, -width / 2+200, width / 2-200),
      map(cos(frameCount * 0.13), -1, 1, -50, 0)
    );

    scale(1, 1 + sin(frameCount * 0.13 ) * 0.13);
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y+100);
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    scale(0.8);
    noStroke();

    // Tail
    fill(255);
    ellipse(108, -42, 48, 25);
    ellipse(95, -65, 25, 48);

    // Flippers
    ellipse(-95, 55, 45, 30);
    ellipse(42, 55, 45, 25);

    // Body
    noStroke();
    fill(255);

    // Main body
    ellipse(-25, 0, 175, 145);

    // Narrow rear body
    push();
    translate(55, -15);
    rotate(-PI / 6);
    ellipse(-5, -10, 130, 110);
    pop();

    // Closed eyes
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(-65, 15, 25, 20, 0, PI);
    arc(-5, 15, 25, 20, 0, PI);

    // Whiskers
    stroke(150);
    strokeWeight(0.7);
    line(-55, 38, -25, 42);
    line(-55, 50, -25, 48);
    line(5, 42, 30, 38);
    line(5, 48, 30, 50);

    // Muzzle
    noStroke();
    fill(225, 225, 230);
    ellipse(-10, 45, 45, 30);

    // Nose
    fill(65);
    ellipse(-10, 43, 18, 15);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/