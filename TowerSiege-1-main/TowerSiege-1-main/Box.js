class Box{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    this.image = loadImage("block.png");
    this.Visibility = 255

    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    World.remove(world,this.body)
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    if (this.body.speed>3 ){
     
      
      this.Visibility-=5
      tint(255, this.Visibility)
      image(this.image, this.body.position.x, this.body.position.y, 50, 50)
      
    }
    else
    super.display()
  }
    
    pop();
  }


