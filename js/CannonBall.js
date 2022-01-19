class   CannonBall{


    constructor(x,y){
        let options={
            isStatic : true

        }
        this.r = 30
        
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("./assets/cannonBall.png")
        this.trajectory = []
        World.add(world,this.body)
    
    }

    show(){

        let pos = this.body.position
        push()
        imageMode(CENTER)
        
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop()

        //adding the positions in the trajectory
        if(this.body.velocity.x>0 && pos.x > 200){
            let position = [this.body.position.x , this.body.position.y]
            this.trajectory.push(position)          
        }

        //adding the image for the trajectory
        // trj = [[x1,y1],[x2,y2],[x3,y3]]
        // trj[0][0], trj[0][1]
        // trj[1][0], trj[1][1]
        // trj[i][0], trj[i][1]
        for(let i = 0;i<this.trajectory.length;i++) {
            image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)
        }   
    }

    shoot(){

        let newAngle = cannon.angle - 28
       
        //convert to radians 
        newAngle = newAngle * (3.14/180)

        let velocity = p5.Vector.fromAngle(newAngle)
        velocity.mult(0.5)
        
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{
            x: velocity.x* (180/3.14), 
            y: velocity.y * (180/3.14)
        })

    }


}