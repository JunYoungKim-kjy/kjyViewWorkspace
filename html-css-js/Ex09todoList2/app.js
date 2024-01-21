class app{
    constructor() {
        this.nodeList=[];
        this.list = document.querySelector("#list");
        this.inputTitle = document.querySelector(".input_title");
        this.inputContent = document.querySelector(".input_content");
        this.addBtn = document.querySelector(".addBtn");
        this.garbage = document.querySelector(".garbage");
        this.textBox = document.querySelector(".textbox");
        this.index=0;
        this.settimeout=null;
        this.init();
    }
    init(){
        this.addBtn.addEventListener("click",this.addItem);
        this.inputTitle.addEventListener("keydown",e=>{
            if(e.key == "Enter"){
                e.preventDefault();
                this.inputContent.focus();
            }
        })
        this.inputContent.addEventListener("keydown",e=>{
            if(!e.shiftKey && e.key == "Enter"){
                e.preventDefault();
                this.addItem();
            }
        })
        this.getStorage();
        this.nodeList.length!=0 && this.nodeList.forEach(node=>{
            this.setItem(node.index,node.title,node.content)
            this.index = node.index+1;
        })
        this.garbage.addEventListener("dragover",e => {
            e.preventDefault();
        });
        this.garbage.addEventListener("drop",e => {
            const idx = e.dataTransfer.getData("index");
            this.deleteItem(idx);
            this.getStorage();
        });
    }

    deleteItem(index){
        const itemList = [...document.querySelectorAll(".item")];
        const delitem = itemList.find(item => item.getAttribute("data-id") == index);
        delitem.classList.add("delete");
        setTimeout(()=>{
            delitem.parentElement.remove();
        },800);

        const delIndex = this.nodeList.findIndex(node => node.index == index);
        this.nodeList.splice(delIndex,1);
        this.setStorage();
        this.showTextBox("삭제가 완료되었습니다");
        this.inputContent.value='';
        this.inputTitle.value='';
    }

    addItem=()=>{
        const title = this.inputTitle.value.trim();
        const content =this.inputContent.value.trim();
        if(title == ""){
            this.inputTitle.focus();
            return alert("제목을 입력해주세요.")
        }
        if(content == ""){
            this.inputContent.focus();
            return alert("내용을 입력해주세요.")
        }
        if(this.nodeList.findIndex(node=>node.title == title)!=-1){
            this.inputTitle.focus();
            return alert("이미 존재하는 제목입니다.")
        }
        this.setItem(this.index,title,content);
        this.nodeList.push(this.setNodelist(this.index,title,content));
        this.showTextBox("TodoList가 추가되었습니다.");
        this.setStorage();
        this.inputContent.value='';
        this.inputTitle.value='';
        this.index++;
        this.inputTitle.focus();
    };
    setItem(index,title,content){
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="item" draggable="true" data-id="${index}">
                    <h2 class="title">${title}</h2>
                    <p class="content">${content}</p>
                </div>`
        this.list.appendChild(div);
        div.addEventListener("dragover",e=>e.preventDefault())
        div.addEventListener("dragstart",event=>{
            let idx = event.dataTransfer.setData("index",event.target.getAttribute("data-id"));
        });
        return div;
    };
    setNodelist(index,title,content){
        const item = {
            index,
            title,
            content
        }
        return item;
    };
    setStorage(){
        const list = JSON.stringify(this.nodeList);
        localStorage.setItem("todo_List",list);
    };
    getStorage(){
        if(localStorage.getItem("todo_List")==null ||localStorage.getItem("todo_List").length==2){
            localStorage.clear();
            this.nodeList=[];
            return;
        }
        const list = JSON.parse(localStorage.getItem("todo_List"));
        if(list==null)return;
        this.nodeList=[...list];
        
    };
    showTextBox(msg){
        clearTimeout(this.settimeout)
        this.textBox.innerHTML = msg;
        this.textBox.classList.add("run");
        this.settimeout = setTimeout(()=>{this.textBox.classList.remove("run")},3000);
    };
};

const startApp = new app();