const Controll = function($plan, $key){
    this.canvas = $plan.canvas
    this.key = $key;
    this.person = $plan.person.ghost;
    this.game = $plan.context;
    this.loop = false;

    this.walk = (bg_x)=>{
        switch(this.key.keyCode){
            case 39: 
                this.person.x =  (this.person.x + 5) > this.game.canvas.width ? 0 : this.person.x + 5;
                
                this.canvas.style = `background-position-x: -${!bg_x ? 0 : (bg_x * -1)  + 1}vh`; 
                return this.person;
            break;
            case 37: 
                this.person.x =  (this.person.x - 5) < 0 ? 0 : this.person.x - 5;
                
                this.canvas.style = `background-position-x: -${!bg_x ? 0 : (bg_x * -1)  - 1}vh`; 
                return this.person;
            break;
        }
    }

    this.move = ()=>{  
        let bg_x = this.canvas.style.backgroundPositionX.replace("vh", "")
      
        if(this.key.keyCode == 39 || this.key.keyCode == 37){
            this.game.clearRect(this.person.x, this.person.y, this.person.width, this.person.height);
            let person = this.walk(bg_x)
            this.person.draw();
            return person;
          
        }else if(this.key.keyCode == 38 && this.person.loop == false){
            this.person.constant_drawing(this.jump());
            return this.person;
        }else{
            this.person.draw();
            return this.person;
        }
    }

    this.jump = (bg_x)=>{
        return ( Math.floor(Math.random() * (400 - 200 + 1)) + 200);
    }

}

export{
    Controll
}