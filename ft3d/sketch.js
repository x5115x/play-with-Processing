var tree;
var max_dist = 200;
var min_dist = 5;

var fr;

function setup() {
  createCanvas(300, 400, WEBGL);
  tree = new Tree();
  fr = createP('');
}

function draw() {

  background(51);
  orbitControl();
  tree.show();
  tree.grow();
  fr.html(floor(frameRate()));
}
