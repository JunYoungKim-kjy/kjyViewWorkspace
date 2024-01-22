class App {
    constructor(){
        this.player = new Player();
        this.poopList = [];
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.startBtn = document.querySelector("#startBtn");
        this.frame = null;

        this.init();
    }
    init(){
        // 똥 만들기
        for (let i=0; i < 10 ; i+=1){
            this.poopList.push(new Poop());
        };
        // 똥 내려오기
        this.startBtn.addEventListener("click",()=>{
            this.frame = setInterval(()=>{
                this.update();//위치 옮기기
                this.render();//지웠다가 보여주기
            },15);
        });
    }

    update(){
        this.player.update();
        this.poopList.forEach(poop=> poop.update());

        for(let i=0; i< this.poopList.length;i+=1){
            if(this.poopList[i].checkCollision(this.player)){
                clearInterval(this.frame);
                alert("게임오버");
                break;
            };
        };
    }

    render(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.player.render(this.ctx);
        this.poopList.forEach(poop=>poop.render(this.ctx));
    }

}
let app = new App();