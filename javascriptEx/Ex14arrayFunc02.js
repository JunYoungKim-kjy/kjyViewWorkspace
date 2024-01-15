// 고차함수 => 콜백함수를 사용한다.

// 콜백함수는 보통 화살표 함수를 많이 쓴다.
let array = [3, 4, 5, 6, 7, 8, 4, 3, 6];

// 데이터를 처음부터 끝가지 한 개씩 차례대로 꺼내온다.
// array.forEach(function (n) {
//   console.log(n);
// });
// let printAll = function (n) {
//   console.log(n);
// }

// 이렇게 되어있는것 
// array.forEach((n) => {
//   return console.log(n);
// });

// 문제1 짝수만 출력
array.forEach(n => {
  if (n % 2 == 0) console.log(n)
});

// map() 데이터 셋을 가공해서 반환 시켜준다 
let result = array.map(x => x * 100);
console.log(result);
console.log(array);


// const cat = {
//   name: '나비',
//   age: 10
// }

// function printCat(cat) {
//   cat.name = '뚱냥이';
//   return cat;
// }

// console.log(cat);
// console.log(printCat(cat));


// filter : 조건식이 있고 true 되는 값만 반환

result = array.filter(value => value % 2 == 0);
console.log(result);

// 조건에 맞는 값 1개를 찾아줌
result = array.findIndex(value => value < 5);
console.log(result);

// --reduce () : 총합 등 식을 주면 그거에 맞는 결과값을 줌

result = array.reduce((p, n) => p + n);
console.log(result);

// reduce 인자값을 2개를 받는다 ( 콜백함수(p , n) , 시작값)
// n = 3, p = 0 , return 3+0 => p = 3
// 