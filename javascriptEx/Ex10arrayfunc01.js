// 배열의 함수들..

// 배열 자체를 수정하는가? 새로운 배열을 만드는가

let fruit = ['바나나', '사과', '포도', '딸기', '샤인머스켓']; //new Array
console.log(fruit.length);
console.log(fruit.indexOf('사과'));
console.log(fruit.includes('용과'));
// 배열 자체를 수정
console.log(fruit.push('파인애플'));
console.log(fruit);
fruit.push('레몬');
console.log(fruit);

//  pust = 맨 뒤에 추가
console.log(fruit.pop());


// unshift 맨 앞에 추가
console.log(fruit.unshift('망고'));
console.log(fruit);
fruit.shift();
console.log(fruit);

// 배열 자르기
// splice(시작인덱스,갯수)
// fruit.splice(0, 3);
console.log(fruit);
// 두번째 인자값이 없으면 배열 끝까지 삭제
fruit.splice(3);
console.log(fruit);

// 새로운 배열을 만드는 함수
fruit = ['바나나', '사과', '포도', '딸기', '샤인머스켓'];

//배열 추가
let moreFruit = ['망고', '용과']
// let newFruit = fruit.concat(moreFruit);
// console.log(newFruit)

// ..spread 연산자를 사용하면 쉽게 배열을 복사 할 수 있다.

let newFruit = [...fruit, ...moreFruit];

console.log(newFruit.join());
console.log(newFruit.join('/'));
console.log(newFruit.join(', '));

let numbers = ['f', 'e', 'd'];
console.log(numbers);
let copyNumbers = [...numbers].sort();
console.log(copyNumbers);
copyNumbers.sort((a, b) => a > b ? -1 : 1);
console.log(copyNumbers);
copyNumbers.reverse();
console.log(copyNumbers);