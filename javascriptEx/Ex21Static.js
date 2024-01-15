// 객체끼리 공유하는 자원
// 객체 생성하지 않고 바로 접근
// static => 클래스메서드, 클래스 변수 => 클래스 이름으로 접근한다 : 객체 생성없이

// function Student 
class Student {
  static count = 0;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    Student.count += 1;
  };
  printInfo1 = function () {
    console.log(`======== id = ${this.id} =========`);
    console.log(`======== name = ${this.name} =========`);
  }
  printInfo2 = () => {
    console.log(`======== id = ${this.id} =========`);
    console.log(`======== name = ${this.name} =========`);
  };
  static getTotalStuCnt = () => console.log(`총 학생 수 ${Student.count} 명`);
}
// 스태틱 메서드 안에서는 static변수만 사용하자
console.log(Student.count);

const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');



stu1.printInfo1();
stu2.printInfo1();
stu3.printInfo2();

Student.getTotalStuCnt();

console.log(stu1);
console.log(stu2);
console.log(stu3);