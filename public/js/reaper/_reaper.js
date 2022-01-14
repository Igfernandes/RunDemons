const Reaper = function(plan){
    this.key; 
    this.img = new Image();
    this.img.src = "./public/img/ceifador.png";
    this.width = 75;
    this.height = 100;
    this.y = (window.innerHeight / 10 ) * 7.5;
    this.x = (window.innerWidth / 10 ) * 8.5;
    this.speed = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    this.plan = plan;
    this.time;
    this.status;

    this.move = ()=> {
        this.time = setInterval( ()=>{
            if( this.x <= -(window.innerWidth/10)*2){
                clearInterval(this.time)
                this.status = true;
            } else{
                this.plan.clearRect(this.x, this.y, this.width, this.height);
                this.x = this.x - this.speed;  
                this.plan.drawImage(this.img, this.x, this.y, this.width, this.height);
                }            
             
        }, 20 )   
    }


    this.draw = () =>{
        
        this.move() 
        return this.status;
    }
    
}


export {
    Reaper
}