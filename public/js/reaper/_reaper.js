const Reaper = function(plan){
    this.key; 
    this.img = new Image();
    this.img.src = "./public/img/ceifador.png";
    this.width = 75;
    this.height = 100;
    this.y = (window.innerHeight / 10 ) * 7.5;
    this.x = (window.innerWidth / 10 ) * 8.5;
    this.plan = plan;

    this.draw = () =>{
        this.img.onload = ()=>{
            this.plan.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        this.plan.drawImage(this.img, this.x, this.y, this.width, this.height);

    }
    
}


export {
    Reaper
}