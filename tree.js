const tree = []
var it = 0
var angle;
var angleSlider;

function setup() {
	createCanvas(800, 800);
    angleSlider = createSlider(0, 20, 4)
	let rootBegin = createVector(width / 2, height)
	let rootEnd = createVector(width / 2, height - 150)
    let root = new Branch(rootBegin, rootEnd)
    tree.push(root)
}

class Branch {
	constructor(begin, end){
		this.begin = begin
		this.end = end
        this.visited = false
		this.leftAngle = -PI / angle
		this.rightAngle = PI / angle
    }
  
    swing(){
      let jitter = random(-1, 1)
      this.end = createVector(this.end.x + jitter, this.end.y + jitter)
      this.begin = createVector(this.begin.x + jitter, this.begin.y + jitter)
    }

	draw(){
		line(this.begin.x, this.begin.y, this.end.x, this.end.y)
	}

	entortar(direction = 'right'){
	  let vector = p5.Vector.sub(this.end, this.begin)
	  if(direction == 'right'){
		vector.rotate(this.rightAngle)
	  } else {
		vector.rotate(this.leftAngle)
	  }
      vector.mult(.8)
	  vector.add(this.end)
	  return new Branch(this.end, vector)
    }
  
    size(){
      return p5.Vector.sub(this.end, this.begin).mag()
    }
}

function mousePressed(){
    if(it > 5) return
    for (let i = tree.length - 1; i >= 0; i--){
        if(!tree[i].visited) {
          tree.push(tree[i].entortar('right'))
          tree.push(tree[i].entortar('left'))
          tree[i].visited = true
        }
    }
    it++
}

function draw() {
	background(255)
    angle = angleSlider.value()
    for (const galhinho of tree) {
      galhinho.draw()
    }
}
