
const Person = function($plan){
    this.img = new Image(this.width, this.height);
    this.img.src = "./public/img/ghost.png";
    this.width = 90;
    this.height = 100;
    this.x = 0;
    this.y = (window.innerHeight / 10 ) * 7.5;
    this.plan = $plan;
    this.max;
    this.min;
    this.processing = true;
    this.time;
    this.loop = false;

    this.draw = () =>{
        this.img.onload = ()=>{
            this.plan.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        this.plan.drawImage(this.img, this.x, this.y, this.width, this.height);
    }   
    
    this.constant_drawing = ($value)=>{
        if(this.loop == false){
            this.loop = true;
            this.time = setInterval(()=>{
                if(this.y >= $value && this.processing == true){
                    this.plan.clearRect(this.x, this.y, this.width, this.height);
                    this.y = this.y - 10
                    this.x = this.x + 4
                    this.draw()
                }else{
                    this.processing = false;
                    if(this.y >= (window.innerHeight / 10 ) * 7.5){
                        this.processing = true;
                        this.loop = false;
                        clearInterval(this.time)
                    }else{
                        this.plan.clearRect(this.x, this.y, this.width, this.height);
                        this.y = this.y + 10; 
                        this.x = this.x + 4
                        this.draw()
                    }
                }
            },24) 
        }
        
    }


}


export {
    Person
};