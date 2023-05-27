let noiseScale=0.01;
let r, g, b


function setup() {
  background(153);
  r = random(255)
  g = random(255)
  b = random(255)
  line(0, 0, width, height);
  let cnv = createCanvas(windowWidth, windowHeight);
}


function draw() {

  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*r,g,b);
    line(x, mouseY+noiseVal*80, x, height);
  }
 
  describe(`horizontal wave pattern effected by mouse x-position
    & updating noise values.`);
}
