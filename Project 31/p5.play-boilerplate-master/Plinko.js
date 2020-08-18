class plinko {
    constructor(x,y,radius)
    {
        var options = {
            isStatic:true,
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
        
        
        World.add(world, this.body); 
        
        

    }
    
    display()
    {
        fill("pink");
        
        
        push();
        translate(this.body.position.x, this.body.position.y);
        circle(0,0,this.radius);
        pop();
          
        
      
        
    }
}