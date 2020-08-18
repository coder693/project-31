class particle {
    constructor(x,y,radius)
    {
        var options = {
           
            restitution:0.4
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.color=color(random(0,255),random(0,255),random(0,255))
        
        
        World.add(world, this.body); 
        
        

    }
    
    display()
    {
        
        push();
        translate(this.body.position.x, this.body.position.y);
        noStroke();
        fill(this.color);
        circle(0,0,this.radius);
        pop();
          
        
      
        
    }
}