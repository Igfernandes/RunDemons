const Moon = function($plan){
    this.width = 60;
    this.x = (window.innerWidth / 10) * 6.5;
    this.y = 80;
    this.plan = $plan;

    this.Create = () =>{
        this.plan.fillStyle = "#F9ECB0";
        this.plan.beginPath();
        
        this.plan.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        this.plan.fill();
    }
    
}

export{
    Moon
}