// 비교연산자
// == != > < >= <=

let num = 10;
console.log(num == 10)
console.log(num != 10)
console.log(num > 10)
console.log(num < 10)
console.log(num >= 10)
console.log(num <= 10)

// 자바스크립트에만 있는것

console.log('=====================')
console.log(num == '10'); //true : 값만 비교
console.log(num === '10'); //값 + type 을 비교 === , !==
// === 은 자바스크립트에만 존재
console.log(true == "true");
console.log(true);
console.log('true');

let test = 10;
console.log(typeof test)

test = test.toString();
console.log(test + 1000)
console.log('10' !== 10)
console.log(typeof test)

// 숫자를 문자로 바꾸는 것
let num1 = num + ''; //묵시적(암묵적) 형변환
num1 = num1.toString(); //명시적 형변환

//문자를 숫자로 바꿔주는것
let num2 = '10';
num2 = +num2;
num2 = num2 * 1;
num2 = parseInt('num2');

// 단축 평가

console.loog(true || '김준영');
console.loog(false || '김준영');

consonl.log(true && '김준영');
constructor(false && '김준영');

consonl.log(true && flase && '김준영');
consonl.log(true || flase || '김준영');