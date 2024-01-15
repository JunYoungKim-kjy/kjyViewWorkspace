// this 값은 자바와 다르게 자바스크립트는 변동이 있다 => 해결하기 위해 나온 메서드
// this값을 우리가 설정해줄 수 있음.

// function이라는 객체 안에 있는 메서드
// 각 메서드의 첫번째 인자값은 내가 설정해 주고싶은 this 값
// 1. apply();
// 2. call();
// 3. bind();
function printName() {
  //  this가 최상위 객체 (window, global) 인 상태
  return this?.name || false || '이름이 없습니다';

}
console.log(printName());
const cat = {
  name: '나비'
}

console.log(printName.call(cat)); //원래는 최상이 객체의 주소값인데 => this를 cat의 주소값으로 변경 후 실행
console.log(printName.apply({
  name: '김준영'
}));

function addAll(x, y, z) {
  return `${this?.name || '이름이 없습니다'} 결과값 : ${x + y + z}`
}
console.log(addAll(1, 2, 3));
console.log(addAll.call(cat, 4, 5, 6));
console.log(addAll.apply(cat, [10, 20, 30]));


// call => ,(쉼표 = 콤마)를 기반으로 매개인자값을 순서대로 넘겨준다
// apply => 배열을 기반으로 매개인자값을 넘겨준다.

// call, apply => 함수를 즉시 실행한다
// bind() => 내가 원할 때 실행한다 : this 만 셋팅해 놓음.

const dog = {
  name: '멍멍이'
}
const printDogName = printName.bind(dog); //this 가 바인딩 된 함수를 리턴한다
const printaddAll = addAll.bind(dog, 10, 20, 30);
// console.log(printName.bind(dog)); //bind bound

console.log(printDogName());
console.log(printaddAll());