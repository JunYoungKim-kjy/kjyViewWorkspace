const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let key = {
  right : false,
  left : false,
  up : false,
  down : false,
}

let player = {
  x: 0,
  y: 0,
  size: 150,
  color : 'blue'
}

let enemy = {
  x: canvas.width/2 - 40,
  y: canvas.height/2 - 40,
  size : 80,
  color : 'green'
}

let draw = ()=>{
  movePlayer();
  moveEnemy();
  move();
}

function moveEnemy(){
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, enemy.size, enemy.size);
  ctx.fillStyle = enemy.color;
  ctx.fill();
  ctx.closePath();
}


function movePlayer(){
  ctx.fillStyle = player.color;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function move(){
  if(key.right && player.x < canvas.width - player.size){
    player.x += 1;
  }else if(key.up && player.y > 0){
    player.y -= 1;
  }else if(key.down && player.y < canvas.height - player.size){
    player.y += 1;
  }else if(key.left && player.x > 0){
    player.x -= 1;
  };

  if(player.y > enemy.y - player.size &&
  player.y < enemy.y + enemy.size &&
  player.x > enemy.x - player.size &&
  player.x < enemy.x + enemy.size){
    enemy.color = "red"
  }else{
    enemy.color = "green"
  }
  
};
document.addEventListener("keydown",e=>{
  if(e.key == "w"){
    key.up = true;
  }else if(e.key == "s"){
    key.down = true;
  }else if(e.key == "a"){
    key.left = true;
  }else if(e.key == "d"){
    key.right = true;
  }
});
document.addEventListener("keyup",e=>{
  if(e.key == "w"){
    key.up = false;
  }else if(e.key == "s"){
    key.down = false;
  }else if(e.key == "a"){
    key.left = false;
  }else if(e.key == "d"){
    key.right = false;
  }
});
let timer = setInterval(draw,10);