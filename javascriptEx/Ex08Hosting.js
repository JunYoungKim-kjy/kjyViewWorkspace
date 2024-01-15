// console.log(name)
// var name = '김준영';
// console.log(name)

// functionosyHI

// let const Vs var

// var -> 함수 스코프 영역 가지고 , 변수 선언전에 출력 가능 ==> undefined 발생
// let , const -> 블록스코프 영역, 변수 선언전에 출력 불가능 ==> 에러발생

var i = 99;
for (var i = 1; i < 10; i += 1) {

}
console.log(i);

let j = 99;
for (let j = 1; j < 10; j += 1) {}
console.log(j);

let x = 10;

{
  // local 스코프 영역
  // let x = 30;
  console.log(x);
}