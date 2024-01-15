let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1
};
let pets = [cat, dog, rabbit, hamster, cat];

pets.forEach(obj => console.log(obj));

console.log("quiz1-----------------------------------------------");
// 동물의 kind가 개 인것을 찾아라
let quiz1 = pets.find(n => n['kind'] == '개');
console.log(quiz1);

console.log("quiz2-----------------------------------------------");
// 동물의 kind가 고양이 인것만 빼서 배열로 만들어라
let quiz2 = pets.filter(n => {
  if (n.kind !== '고양이') {
    return n;
  }
});
console.log(quiz2);
console.log("quiz3-----------------------------------------------");
// // 총 동물의 평균 나이를 구해라.
let quiz3 = pets.reduce((sum, n) => sum + n.age, 0) / pets.length;
// result = array.reduce((p, n) => p + n);
console.log('평균 나이는 = ' + quiz3 + '살');

console.log("quiz4-----------------------------------------------");
// 동물 나이순으로 내림차순 정렬

let quiz4 = [...pets]; //깊은복사 => 구조분해를 해서 가져온다 but 객체 안에 객체가 있으면 주소값을 가져와 얕은복사를한다.
quiz4 = quiz4.sort((a, b) => a.age > b.age ? -1 : 1);
console.log(quiz4);