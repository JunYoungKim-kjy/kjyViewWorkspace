const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let key ={
  w : false,
  s : false,
  d : false,
  a : false,
};

let player = {
  x: canvas.width/2,
  y: canvas.height-30,
  size:30,
  color:"blue",
  speed:3,
};
let enemy = [];
//   [{
//   x: canvas.width / 1.2,
//   y: canvas.height / 2,
//   size:50,
//   color:"green",
//   speed:3
// },{
//   x: canvas.width / 1.7,
//   y: canvas.height / 2,
//   size:50,
//   color:"green",
//   speed:3
// },{
//   x: canvas.width / 3,
//   y: canvas.height / 2,
//   size:50,
//   color:"green",
//   speed:3
// },{
//   x: canvas.width / 8,
//   y: canvas.height / 2,
//   size:50,
//   color:"green",
//   speed:3
// }];
function makeEnemy(enemyCnt){
  for(let i=1;i<=enemyCnt;i+=1){
    let en = {
    x: parseInt(Math.random()*700)+50,
    y: 10,
    size:50,
    color:"green",
    speed:parseInt(Math.random()*5)+1
  };
  enemy.push(en)
  };
};
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  print(player);
  for(let i=0; i< enemy.length; i+=1){
    print(enemy[i]);
  };
  movePlayer();
  for(let i=0; i<enemy.length; i+=1){
    isCollison(i);
  }
  for(let i=0; i<enemy.length; i+=1){
    enemy[i].y +=enemy[i].speed; 
  }
};

function print(obj){
  ctx.beginPath();
  ctx.rect(obj.x, obj.y, obj.size, obj.size);
  ctx.fillStyle = obj.color;
  ctx.fill();
  ctx.closePath();
};

document.addEventListener("keydown",e=>{keyHandler(e,true)});
document.addEventListener("keyup",e=>{keyHandler(e,false)});

function keyHandler(e,value){
  if(key[e.key] !== undefined){
    key[e.key] = value;
  }
  // if(e.key == "w"){
  //   key.keyup= value;
  // }else if(e.key == "a"){
  //   key.keyleft = value;
  // }else if(e.key == "s"){
  //   key.keydown = value;
  // }else if(e.key == "d"){
  //   key.keyright = value;
  // }
};

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
// 플레이어의 위치가 enemy의 위치값이면 true 리턴
function inEnemy(index,px,py){
  // emeny.x < px < enmeny.x+ emeny.size;
  // emeny.y < py < enmeny.y+ emeny.size;
  return(enemy[index].x < px && px < enemy[index].x + enemy[index].size) &&
  (enemy[index].y < py && py < enemy[index].y + enemy[index].size);
}
// 충돌 시 true 리턴
function collison(idx){
  // 플레이어의 왼쪽 상단 모소리에 닿으면
  if(inEnemy(idx,player.x,player.y))return true;
  // 플레이어의 오른쪽 상단 모소리에 닿으면
  else if(inEnemy(idx,player.x + player.size , player.y)) return true;
  // 플레이어의 왼쪽 하단 모소리에 닿으면
  else if(inEnemy(idx,player.x , player.y + player.size )) return true;
  // 플레이어의 오른쪽 하단 모소리에 닿으면
  else if(inEnemy(idx,player.x + player.size , player.y + player.size)) return true;
  else return false;
}

function isCollison(idx){
  collison(idx) ? enemy[idx].color = 'red' : enemy[idx].color = "green"
}

function moveEnemy(idx){
  enemy[idx].x = player.x + 1;
}





setInterval(()=>{makeEnemy(parseInt(Math.random()*10)+1)},1000)
setInterval(draw,10)