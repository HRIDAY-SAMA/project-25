class Paper{
    constructor(x,y,r) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

            
        }
        this.body=Bodies.circle(x,y,r/2,options)
        this.radius=r
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        var Paperpos=this.body.position
        push()
        translate(Paperpos.x,Paperpos.y)
     imageMode(CENTER)
            strokeWeight(4)
            fill("white")
           image(this.image,0,0,this.radius,this.radius)
            pop()
    }
}