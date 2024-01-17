const addBtn = document.querySelector(".footer_btn");
const $input = document.querySelector(".footer_input");
const $items = document.querySelector(".items");
let delBtns = [...document.querySelectorAll(".item_delete")];
let $item_rowList = [...document.querySelectorAll(".item_row")];
let itemList = [...document.querySelectorAll(".item")];
let nameList = [...document.querySelectorAll(".item_name")];
let itemNum = 3;

// getAttribute('data-id')
function deleteItem(id){
  const delItem = document.querySelector(`.item_row[data-id="${id}"]`);
  delItem.remove();
}
// 삭제버튼
// delBtns.forEach((btn)=>{
//   btn.addEventListener("click",()=>{
//     const id = btn.firstElementChild.dataset.id;
//     deleteItem(id)
//       // console.log(btn.firstElementChild.dataset.id);
//       // console.log($item_rowList[0].dataset.id);
//       // console.log(id);
//       // console.log($item_rowList.find(item => item.dataset.id == 2));
//       // const delitem = $item_rowList.find(item=>item.dataset.id == id);
//       update();
//       console.log(delBtns);
//     });
// });

$items.addEventListener("click",(event)=>{
  let id = event.target.getAttribute('data-id');
  console.log(id)
  if(!id){
    // path // sgv선택했을 때 path로 잡히면 그것에 부모인 svg(data-id) 선택
    id = event.target.parentElement.getAttribute('data-id');
    // 아이템을 선택했을 시는 삭제 안되게 막아줌
    if(event.target.parentElement.classList.value === 'item_row') return;
  }
  id && deleteItem(id);
});


function update(){
delBtns = [...document.querySelectorAll(".item_delete")];
$item_rowList = [...document.querySelectorAll(".item_row")];
itemList = [...document.querySelectorAll(".item")];
nameList = [...document.querySelectorAll(".item_name")];
}

// 엔터입력
$input.addEventListener("keydown",(e)=>{
  if(e.keyCode == 13){
    const name = check();
    if(name){
      addName(name);
    }else{
      return;
    };
  };
});
// 추가버튼
addBtn.addEventListener("click",()=>{
  const name = check();
  if(name){
    addName(name);
  }else{
    return;
  }
});

// 중복 및 공백 처리
function check(){
  const input = document.querySelector(".footer_input");
  const name = input.value.replaceAll(" ","");
  // 공백
  if(!name) return console.log(alert("값 입력"));
  // 중복
  if(nameList.find(list => list.textContent == name)){ 
    return alert("중복")
};

  return name;
}

function addName(name){
  // 줄 생성
  const li = document.createElement("li");
  li.classList.add("item_row");
  li.setAttribute('data-id',`${itemNum}`);
  $items.appendChild(li);
  
  // 아이템 생성
  const item = document.createElement("div");
  item.classList.add("item");
  li.appendChild(item);
  
  //span 생성
  const span = document.createElement("span");
  span.classList.add("item_name");
  span.textContent = name;
  item.appendChild(span);
  
  
  //삭제 버튼 생성
  const button = document.createElement("button");
  button.classList.add("item_delete");
  
      //삭제버튼 아이콘 추가
      const i = document.createElement("i");
      i.classList.add("fa-solid");
      i.classList.add("fa-trash-can");
      i.setAttribute("data-id",`${itemNum}`);
      button.appendChild(i);
  
  item.appendChild(button);
  itemList = [...document.querySelectorAll(".item")];
  nameList = [...document.querySelectorAll(".item_name")];
  itemNum+=1;

  update();
};

