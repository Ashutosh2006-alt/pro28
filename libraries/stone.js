class Stone {
   constructor(x, y, radius) {
      var options = {
         isStatic: false,
         'restitution': 0.5,
         'friction': 1,
         'density': 0.5
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.image = loadImage("stone.png");
      this.body = Bodies.circle(this.x, this.y, this.radius, options);
      World.add(world, this.body);
   }
   display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      ellipseMode(CENTER);
      fill(0,0,0,0);
      stroke(0,0,0,0);
      ellipse(0,0,this.radius,this.radius);
      pop();
   }
}