// 함수의 표현식
let callName = function printName(name) {
  console.log('이름은', name);
}
// printName('김준영')  안된다
callName('김준영');

let callAge = function (age) {
  console.log('나이는', age);
}
callAge(10);
// new Function()
function addNumber(x, y = 10) {
  // console.log(arguments);

  return x + y;
}

console.log(addNumber(5));
//  화살표함수는 무명함수
//  화살표함수는 function() 키워드가 생략 => 생성자함수 사용 못 함. : 가볍다
let minus = (a, b) => {
  // console.log(arguments);
  return a - b;
};

let multifly = (a, b) => a * b;

console.log(minus(20, 10));
console.log(multifly(5, 5));
// 자바스크립트에서 함수는 값으로 사용 할 수 있다.
let addAll = x => y => z => `x:${x} y:${y} z:${z}`;

let addTest = function (x) {
  return function (y) {
    return function (z) {
      return `x:${x} y:${y} z:${z}`;
    }
  }
}

console.log(addAll(1)(2)(3));

// 즉시 실행함수

(function (x, y) {
  console.log(x + y);
})(10, 20);


console.log(minus instanceof Array);