// 접근제어자 - 캡슐화 => private getter setter

// class Student(){ private int id ; private String name;}

// private => 직접 접근이 불가능하다.
class Student {
  static count = 0;
  #id;
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    Student.count += 1;
  }

  static fromObject(obj){
    //obj?.id = id객체가 없으면 undefined;
    if(!!obj?.id && !!obj?.name ){
      return new Student(obj.id,obj.name);
    }
  }

  static fromList(list){
    if(!Array.isArray(list)) return null;
    return new Student(list[0], list[1]);
  }

  getName() {
    return this.#name;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

}

const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

// console.log(stu1);
// console.log(stu1.name);
// console.log(stu1.getName());

// stu2.name = 'Tom'
// console.log(stu2.name);
// stu2.id = 'awef'
// console.log(stu2.id)

const stu4 = Student.fromObject({ name :'Hong', id:20191532148});
console.log(stu4)
console.log(stu4 instanceof Student);

const stu5 = Student.fromList([123456,'Cha']);
console.log(stu5);