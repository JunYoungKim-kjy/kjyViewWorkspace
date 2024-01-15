let cat = {
  kind: '고양이',
  name: '뚱냥이',
  age: 2,
  info: function () {
    console.log(` ------- ${this.kind}---------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}
let dog = {
  kind: '강아지',
  name: '오송',
  age: 9,
  info: function () {
    console.log(` ------- ${this.kind}---------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}
let hamster = {
  kind: '햄스터',
  name: '햄찌',
  age: 5,
  info: function () {
    console.log(` ------- ${this.kind}---------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  }
}

// 자바 모든게 클래스다, 자바스크립트 모든게 함수다.
// 생성자 함수 = class ??
// 객체를 생성하는 함수 => 생성자 함수(무조건 첫글자 대문자)
// 
function Pet(kind, name, age) {
  this.kind = kind;
  this.name = name;
  this.age = age;
  this.info = () => {
    console.log(` ------- ${this.kind}---------`);
    console.log(`이름 : ${this.name}`);
    console.log(`나이 : ${this.age}`);
  };
  // return this; //가 생략 되어있음.
}

function test(name) {
  this.name = name;
}

// 화살표 함수랑 일반함수의 차이점
// 함수를 통해서 객체생성 => 생성자함수 내포한다 => 객체
// 화살표함수는 생성자 함수를 포함하지 않는다 => 객체 생성이 안된다: 가볍다, 순수 함수기능만 함

// let arrFnc = (name, age) => {
//   this.name = name;
//   this.age = age;
// };

const navi = new Pet('고양이', '다주', 10);
console.log(navi);
const tObj = new test('테스트');
// const arrObj = new arrFnc('이름', 100);

console.log(tObj);
// console.log(arrObj);