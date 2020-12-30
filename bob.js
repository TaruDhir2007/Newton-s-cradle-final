class Bob{
    constructor(x, y){
        var options = {
      restitution: 0.8,
      density: 0.9,
      friction: 0.1 
       }
       this.body = Bodies.circle(x, y, 25, options)
       World.add(world, this.body)
   
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(230, 230, 0);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
    }
