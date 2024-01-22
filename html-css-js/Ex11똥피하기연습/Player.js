class Player{
    constructor(){
        this.img = new Image();
        this.img.src = "./img/player.png";
        this.img.addEventListener("load",()=>{
            this.ready=true;
        })
        this.ready=false;
        
        // w.400 h.600
        this.x=175;
        this.y=540;
        this.w=30;
        this.h=40;
        this.speed=3;
        this.keyArr=[false,false];

        this.init();

    }

    init(){
        document.addEventListener("keydown",(e)=>{
            if(e.key === 'ArrowLeft'){
                this.keyArr[0]=true;
            }else if(e.key==='ArrowRight'){
                this.keyArr[1]=true;
            }
        });
        document.addEventListener("keyup",(e)=>{
            if(e.key === 'ArrowLeft'){
                this.keyArr[0]=false;
            }else if(e.key==='ArrowRight'){
                this.keyArr[1]=false;
            }
        });
    }



    update(){
        if(!this.ready)return;
        if(this.keyArr[0]){
            this.x -= this.speed;
        }
        if(this.keyArr[1]){
            this.x += this.speed;
        }

        if(this.x < 0) this.x = 0;
        if(this.x > 400 - this.w) this.x = 400-this.w;
        
    }
    render(ctx){
        if(!this.ready)return;
        ctx.drawImage(this.img, this.x,this.y,this.w,this.h)
    }
}