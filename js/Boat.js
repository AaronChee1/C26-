class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {
    let options={
      restitution: 0.8,
      friction: 1,
      density: 1.0,
      
    }

    this.speed = 0.05
    this.animation = boatAnimation
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.image = loadImage("./assets/boat.png");
    this.broken = false
    World.add(world, this.body);
  }

  animate(){
    this.speed += 0.5
    //this.speed = this.speed+0.5
  }
  remove(index) {
    this.speed = 0.05
    this.animation = brokenBoatAnimation
    this.width = 300;
    this.height = 300;
    this.broken = true
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length)

    push()
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}
