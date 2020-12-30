class Rope{
    constructor(bodyA, bodyB,xOffset){
        var options = {
            bodyA: bodyA,
           bodyB: bodyB,
           pointB : {x : xOffset ,  y : 0}

        //    stiffness: 0.1,
        //  length: 10
        }
       
        //this.pointB = pointB;
        this.xOffset = xOffset;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            
                stroke("white")
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x + this.xOffset , pointB.y);
               
        

            
            pop();
        }
    }
    
}