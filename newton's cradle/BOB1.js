class BOB {
    constructor (x,y){
        this.body = Bodies.circle(x,y,20,{isStatic:true})
        this.radius = 40;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("red");
        circle(pos.x,pos.y,this.radius);
        
        
        pop ();
    }
}