class Paper{
    constructor(x,y)
    {
        var options = { isStatic:false,restitution:0.8,friction:0.5,density:1.0}
    
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.width=50
        this.height=50
        World.add(world,this.body)
    }
    
    display(){
    var pos = this.body.position    
    push();
    translate(pos.x,pos.y)
    var angle = this.body.angle
    rotate(angle)
    rectMode (CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop()
    }
    }