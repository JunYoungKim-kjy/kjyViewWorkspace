// 옵셔널 체이닝 => ES11 (ECMA 2020)

// null, undefined 차이

// console.log(!!null);
// console.log(!!undefined);

// let item = {
//   price: 1
// };


// console.log(typeof item);
// console.log(item.price);
// console.log(item['name']);

// 객체를의 요소 동적으로 접근하기
let cat = {
  name: '나비',
  age: 2
}
// 객체를의 요소 동적으로 가져오기
function getValue(obj, key) {
  if (obj[key] === undefined) {
    return '키 값이 없습니다';
  }
  return obj[key];
}
// 객체를의 요소 동적으로 추가하기
function addKey(obj, key, value) {
  if (!!obj[key]) {
    return '키 값이 이미 있습니다'
  }
  obj[key] = value;
  return obj;
}

// 객체를의 요소 동적으로 삭제하기
function removeKey(obj, key) {
  if (!obj[key]) {
    return '키 값이 없습니다.'
  }
  delete obj[key];
  return obj;
}

// function printKey(obj, key) {
//   return (obj ? .key) ? obj[key] : '없는 키값입니다.';
// }

console.log(getValue(cat, 'test'));
console.log(addKey(cat, 'age', 10));
console.log(removeKey(cat, 'test'));




// console.log(getValue(cat, 'name'))
// console.log(addKey(cat, 'owner', {
//   name: '김준영'
// }));
// console.log(addKey(cat, 'age', 10));
// console.log(removeKey(cat, 'age'));
// console.log(removeKey(cat, 'age'));


// nullish    coalescing     operator   ?? 널리쉬 콜리싱 오퍼레이터 - ES11 (ECMA 2020)
// null , undefined 만 false 로 인식한다 0은 true로 인식 나머지 falesy value는 다 true
// 

let num = 0;
// 0은 자동으로 false 값으로 인식하기 때문에 이러한 문제점 : false 아니라고 하고싶은데
// 0 false 인식
console.log(num || -1); // num이 false 이기 때문에 -1로 넘어간다
console.log(num && -1);
console.log("======================");

console.log(num ? ? -1);

console.log(null ? ? '1');
console.log(undefined ? ? '1');
console.log('' ? ? '1');