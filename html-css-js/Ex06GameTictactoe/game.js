const startBtn = document.querySelector("#start");
const $table = document.querySelector("table");
let $tableRow = [...document.querySelectorAll("tr")];
const offBtn = document.querySelector(".off");
let count = 0;
let turn = true;
let run = true;

let arr= [];
for(let i=0; i < $tableRow.length; i+=1){
  arr.push($tableRow[i].children);
}

startBtn.addEventListener("click",e=>{
  startBtn.classList.add("active");
  $table.classList.add("active");
});

$table.addEventListener("click",e=>{
  if(!run)return;
  if(e.target.innerText)return;
  if(e.target.classList.contains("blue") && e.target.classList.contains("pink"))return;
  let color = turn? "blue" : "pink";
  let mark = turn? "O" : "X";
  // console.log(e.target);
  e.target.innerText = mark;
  e.target.classList.add(color);
  turn = !turn;
  if(check(mark)){
    setTimeout(()=>end(color),1000);
    run =false;
  }
  console.log(count);
  count +=1;
  if(count ==9){
    setTimeout(()=>drow(),1000);
    run =false;
  }
});

function drow(){
  $table.classList.remove("active");
  offBtn.classList.add("active");
  offBtn.innerText = `무승부!`
  restartBtn();
}

function end(color){
  $table.classList.remove("active");
  offBtn.classList.add("active");
  offBtn.innerText = `${color} 님의 승리!`
  restartBtn();
}
function restartBtn(){
  startBtn.classList.remove("active");
  startBtn.textContent = "다시 하려면 여기를 누르세요"
  startBtn.addEventListener("click",restart)
}

function restart(){
  count=0;
  run = true;
  offBtn.classList.remove("active");
  startBtn.classList.add("active");
  $table.innerHTML=`
  <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>`
      $tableRow = [...document.querySelectorAll("tr")];
      arr= [];
      for(let i=0; i < $tableRow.length; i+=1){
      arr.push($tableRow[i].children);
      turn = true;
};
};



function check(mark) {
  if(garo(mark) || sero(mark) || corss1(mark) || corss2(mark)){
    return true;
  };
}

function garo(mark) {
  for(let i=0; i < $tableRow.length;i+=1){
    let cnt =0;
    const tableCol = [...$tableRow[i].children];
    for(let k=0; k<tableCol.length;k+=1){
      if(tableCol[k].innerText==mark){
        cnt+=1;
      };
    };
    if(cnt==3){
      return true;
    }
}
}

function sero(mark) {
  for(let i=0; i < arr.length; i+=1){
    let cnt =0;
    for(let k=0; k<arr[0].length; k+=1){
      if(arr[k][i].innerText == mark){
      cnt +=1;
    };
  };
    if(cnt==3){
      return true;
    };
  };
};

function corss1(mark) {
  let cnt = 0;
  for(let k=0; k<arr.length; k+=1){
    if(arr[k][k].innerText == mark){
    cnt +=1;
    };
  };
    if(cnt==3){
      return true;
    };
  };

  function corss2(mark) {
    let cnt = 0;
    for(let k=0; k<arr.length; k+=1){
      if(arr[k][arr.length-1-k].innerText == mark){
        console.log(cnt)
      cnt +=1;
      };
    };
      if(cnt==3){
        return true;
      };
    };
