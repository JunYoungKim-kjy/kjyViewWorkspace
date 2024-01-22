class App{
  constructor(){
    this.listDom = document.querySelector("#list");
    // this.todoList = []; //작업들을 저장하는 배열
    this.todoList = [];
    this.index=0;

    this.titleInput = document.querySelector("#title");    //제목입력칸
    this.contentInput = document.querySelector("#content");//내용입력칸
    this.$addBtn = document.querySelector("#addBtn");      //+버튼
    this.garbage = document.querySelector("#garbage");     //삭제버튼
    this.msgBox = document.querySelector(".msg-box");      //메세지박스
    this.items = [];  //아이템들
    this.init();
    
  };
  update(){
    this.items = [...document.querySelectorAll("#list>.item")];  //아이템들
    this.setLocalStorage();
    this.clickAndDrag();
  }
  
  getStorege(){
    if(JSON.parse(localStorage.getItem("todoList")) == null)return;
    const storageArr = [...JSON.parse(localStorage.getItem("todoList"))];
    this.listDom.innerHTML='';
    storageArr.forEach(data=>{
      this.createTodo(data.index,data.title,data.content);
      this.createItem(data.index,data.title,data.content);
      this.index = data.index+1;
    });
  }
  
  init(){
    this.getStorege();
    this.update();
    
  }
  clickAndDrag(){
    // 추가버튼 클릭
    this.$addBtn.addEventListener("click",this.clickAddBtn);
    // 드래그 시작시
    this.items = [...document.querySelectorAll("#list>.item")];  //아이템들
    this.items.forEach(item=> {
      item.addEventListener("dragover",e=>{
        e.preventDefault();
      })
      item.addEventListener("dragstart",e=>{
        e.dataTransfer.setData("idx",e.target.getAttribute("data-id"));
        console.log(e.target);
      });
    });
    // 삭제드래그가능
    this.garbage.addEventListener("dragover",e=>{
      e.preventDefault();
    });
    // 드래그드롭 시
    this.garbage.addEventListener("drop",e=>{
      let index = e.dataTransfer.getData("idx");
      this.deleteItem(index);
    });
  };
  // 데이터 삭제
  deleteItem(index){
    if(this.items.length==0)return;
    this.items.find(item=>item.getAttribute("data-id")==index).remove();
    const idx = this.todoList.findIndex(todo=>todo.index==index);
    this.todoList.splice(idx,1);
    this.setLocalStorage();
  }


  //추가버튼실행
  clickAddBtn = ()=>{
    const tInValue = this.titleInput.value.trim();
      const cInValue = this.contentInput.value.trim();
      if(tInValue==''){
        alert("제목을 입력해주세요.");
        return ;
      }
      const findIdx = this.todoList.findIndex(e=>e.title==tInValue);
      if(findIdx != -1){
        alert("이미 존재하는 제목입니다.");
        return ;
      }
      if(cInValue==''){
        alert("내용을 입력해주세요.");
        return ;
      }
      this.createTodo(this.index,tInValue,cInValue);
      this.createItem(this.index,tInValue,cInValue);
      this.index+=1;
      this.update();
  }

  //스토리지에 추가하기
  setLocalStorage(){
    const data = JSON.stringify(this.todoList);
    localStorage.setItem("todoList",data)
  }
  // ListDom아래 아이템객체 추가하기
  createItem(index,title,content){
    this.listDom.innerHTML += `
            <div class="item" draggable="true" data-id="${index}">
                <h4 class="title">${title}</h4>
                <span class="msg">${content}</span>
            </div>
    `
  };
  // todoList에 내용 추가하기
  createTodo(index ,title,content){
    const todoValue =        {
      index : index,
      title : title,
      content : content
    };
  this.todoList.push(todoValue);
  };
  

  
  
  
};
new App();
// 1. 로컬스토리에서 저장되는 값 가져오기
// 2. todo값 추가흐는 것
// 3. html에서 dom 객체 만드는것
// 4. todo값 삭제하기


// 핑시트 4 : [1] todolist 값 추가하기 + html dom 추가
// 핑시트 5: [2] todolis localstorage에 값 추가하기
// 핑스트 6: [3] todolist 값 삭제하기 + html dom 삭제
// 핑시트 7 : [4] todolis localstorage에 값 삭제하기