const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let key = {w:false, a:false, s:false, d:false};
let player = { x: canvas.width /2 -25 , y:canvas.height - 50, size: 50, speed: 3, color: "blue"}
let enemylist =[];
let timer = 0;

// enemy만들기
function makeEnemy(count){
  if(timer %100 == 0){
    timer = 0;
    for(let i=0; i<count;i+=1){
      const enemy = {
        x: parseInt(Math.random()*750),
        y: 10,
        size: 50,
        speed: parseInt(Math.random()*4)+1,
        color: "green",
        alive: 1000
      };
      enemylist.push(enemy);
    };
  };
  timer +=1;
};

// 지웠다가 그리기
draw = ()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawObj(player);
  makeEnemy(parseInt(Math.random()*5)+3);
  enemylist.forEach(enemy=>{
    drawObj(enemy)
  })
  moveEnemyList();
  movePlayer();
  isCollison();
  updateEnemy();
  console.log(enemylist);
};


function moveEnemyList(){
  enemylist.forEach(ene=>{
    ene.y += ene.speed;
    ene.alive -=1;
  });
};

function updateEnemy(){
  enemylist.forEach(enemy=>{
    enemylist = enemylist.filter(enemy => enemy.alive > 0)
  })
  
}


// 오브젝트 그리기
function drawObj(obj){
  ctx.beginPath();
  ctx.rect(obj.x , obj.y , obj.size , obj.size);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
}

// 초기값 주기
function init(){
  document.addEventListener("keydown",e=>{keyHandler(e,true)})
  document.addEventListener("keyup",e=>{keyHandler(e,false)})
}

// 키보드 입력값 전달
function keyHandler(e,value){
  if(key[e.key] !==undefined){
    key[e.key] = value;
  };
};

// 플레이어 움직이기(좌우만)
function movePlayer(){
  // if(key.w && player.y > 0){
  //   player.y -= player.speed;
  // }else 
  if(key.a && player.x > 0){
    player.x -= player.speed;
  }
  // else if(key.s && player.y < canvas.height - player.size){
  //   player.y += player.speed;
  // }
  else if(key.d && player.x < canvas.width - player.size){
    player.x += player.speed;
  }
};

// 플레이어의 박스가 들어갔는지 확인
function inEnemy(px,py,enemy){
  return (enemy.x < px && px < enemy.x + enemy.size)&&
  (enemy.y < py && py < enemy.y + enemy.size);
};
function collison(enemy){
  // 플레이어의 좌측 상단
  if(player.x , player.y, enemy)return true;
  // 플레이어의 우측 상단
  else if(player.x + player.size , player.y)return true;
  // 플레이어의 좌측 하단
  else if(player.x , player.y + player.size)return true;
  // 플레이어의 우측 하단
  else if(player.x + player.size , player.y + player.size)return true;
  else return false;
};
function isCollison(){
  enemylist.forEach(enemy => {
    collison(enemy) ? enemy.color = "red" : enemy.color = " green"
  });
};
// 여기까지 확인절차


init();
setInterval(draw,10)
// let addEnemy = setInterval(()=>{makeEnemy(parseInt(Math.random()*5)+3)},1000);