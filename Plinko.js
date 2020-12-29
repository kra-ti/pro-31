class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.2,
            density:1.2,
            friction:1
        }
        this.body=Bodies.circle(x,y,10,options)
        World.add(world,this.body);
    }
    display(){
        push();
        fill("white")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,20,20);
        pop();
    }
}