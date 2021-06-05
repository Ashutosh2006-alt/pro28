class Through{
   constructor(bodyA,pointB){
      var options = {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.05,
         length:20
      }
      this.pointB = pointB;
      this.bodyA = bodyA;
      this.sling = Constraint.create(options);
      World.add(world,this.sling);
   }
   attach(body) {
		this.sling.bodyA = body;
	}
   fly(){
      this.sling.bodyA = null;
   }
   display(){
      if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(10);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
   }
}