const sBtn = document.querySelector("#start");
const $container = document.querySelector(".container");
const $header = document.querySelector("header");
const $span = document.querySelector("header>span");
class Game1To50{
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.interval=null;
    this.diff = 0;
    this.run = true;
    this.gameNum = 1;
    this.startTime = new Date().getTime();
    this.recode = { min: 0, sec : 0 , milSec: 0, cnt:0};
    this.gameTime = 0;
    this.gameBtn = document.querySelector("#start");
    this.init();
    this.gameStart();
  };


  init(){
    this.createList();
    this.shuffle();
  }
  createList(){
    for(let i=1; i<=50; i+=1){
      if(i<=25){
        this.frontList.push(i);
      }else{
        this.backList.push(i);
      }
    };
  };
  shuffle(){
    for(let i=0; i<1000; i+=1){
      const rNum = parseInt(Math.random()*25-1 +1) ;
      let temp = this.frontList[rNum];
      this.frontList[rNum] = this.frontList[1];
      this.frontList[1] = temp;
    };
    for(let i=0; i<1000; i+=1){
      const rNum = parseInt(Math.random() * 25 );
      let temp = this.backList[rNum];
      this.backList[rNum] = this.backList[1];
      this.backList[1] = temp;
    };
    
  }
  // div.setAttribute(`data-id`,`${num}`);
  createnodeList(){
    this.nodeList= [];
    $container.innerHTML='';
    let num=0;
    for(let i=0;i<25;i+=1){
      const div=document.createElement("div");
      div.classList.add("box");
      div.textContent = this.frontList[i];
      div.setAttribute("data-id",`${num}`);
      $container.appendChild(div);
      num+=1;
      this.nodeList.push(div);
    };
    this.nodeList.forEach(box=>{
      box.addEventListener("click",(event)=>{
        this.recode.cnt += 1;
        this.playGame(event.target);
      });
    });
  };
  gameStart(){
    this.createnodeList();
    $header.classList.add("run");
    sBtn.classList.add("run");
    $container.classList.add("run");
    this.interval = setInterval(this.setTime,10);
  }
  end(){
    clearInterval(this.interval);
    this.run =false;
    $span.textContent += "당신의 기록입니다."
    sBtn.textContent="게임 다시하기";
    sBtn.classList.remove("run");
    $container.classList.remove("run");
  }

  setTime=() => {
    const nowTime = new Date().getTime();
    const diff = nowTime - this.startTime;
    this.recode.min = parseInt(diff>60000?diff/60000:"00");
    this.recode.sec = parseInt(diff>1000?diff/1000:"00")>=60?0:parseInt(diff>1000?diff/1000:"00");
    this.recode.milSec = diff % 1000 /100;
    $span.textContent = `${this.recode.min}:${this.recode.sec}:${this.recode.milSec}`
  }


  playGame(box){
    if(this.gameNum>=51)return;
    if(box.textContent == this.gameNum){
      const index = box.getAttribute("data-id");
      if(this.backList[index]){
        box.textContent = this.backList[index];
        this.backList[index] = null;
      }else{
        box.style.opacity = "0";
      }
      this.gameNum+=1;
    }else{
      const hint = this.nodeList.find(box => box.textContent == this.gameNum);
      this.hint(hint);
    };
    if(this.gameNum==5){
      this.end();
    }
  };
  hint(box){
      box.classList.add("hint");
      setTimeout(()=>box.classList.remove("hint"),500);
  }
};
sBtn.addEventListener("click",()=>{
  new Game1To50();
})