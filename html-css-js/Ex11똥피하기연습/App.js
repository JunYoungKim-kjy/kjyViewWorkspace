class App{
    constructor(){
        this.player = new Player();
        this.poopList=[];
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.startBtn = document.querySelector("#startBtn");
        this.frame = null;
        this.timer = 0;
        
        
        this.init();
    }

    init(){
        // 똥만들기
        for(let i=0; i<10;i+=1){
            this.poopList.push(new Poop());
        };

        this.startBtn.addEventListener("click",()=>{
            this.poopList
            this.frame = setInterval(()=>{
                this.update();
                this.render();
                this.timer+=1;
                this.levelup();
            },10);
        });
    }
    levelup(){
        if(this.timer / 500!=1)return;

        this.timer=0;
        this.poopList.push(new Poop());
    }

    update(){
        this.player.update();
        this.poopList.forEach(poop=>poop.update());

        for(let i=0; i<this.poopList.length;i+=1){
            if(this.poopList[i].checkCollision(this.player)){
                clearInterval(this.frame);
                alert("똥을 뒤집어 썼습니다.")
                break;
            }
        }
    }

    render(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.player.render(this.ctx);
        this.poopList.forEach(poop=>poop.render(this.ctx));
    }
}

let app = new App();