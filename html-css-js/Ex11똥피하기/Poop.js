class Poop{
    constructor(){
        this.img = new Image();
        this.img.src = "./img/poop.png";
        this.img.addEventListener("load",()=>{
            this.ready = true;
        })
        this.ready = false;

        this.x = null;
        this.y = null;
        //크기
        this.w = 20;
        this.h = 15;

        this.speed = null;
        this.reset();
    }

    reset(){
        this.y = -40;
        this.x = Math.floor(Math.random()*(400 - this.h * 2))
        this.speed = Math.random() * 5 + 2;
    }

    update(){
        if(!this.ready)return;
        this.y += this.speed;

        if(this.y >= 600){
            this.reset();
        }
    }

    checkCollision(p){
        if(p.x < this.x+this.w &&
            p.y < this.y+this.h&&
            p.x +p.w > this.x &&
            p.y +p.h > this.h)return true;
        else return false;

    }

    render(ctx){
        if(!this.ready)return;
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    }
}