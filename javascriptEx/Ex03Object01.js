//const하는것은 상수이지만
// 참조변수가 상수면 새로운 주소값으로 변경 불가 but 안에 있는 값은 변경가능
// 리터럴 객체  휘발성(한 번 쓰고 없어지는 애들)
const dog = {
  name: "바두기",
  age: 3
}

const dog2 = {
  name: "바두기",
  age: 3
}

// dog = {
//   name: "흰둥이"
// }
console.log(dog);

const otherDog = dog;
otherDog.owner = {
  name: "제임스",
  age: 34
};

console.log(dog);

console.log("----------------------------------");
// 깊은 복사
const anotherDog = {
  ...dog
};
otherDog.name = "흰둥이";
anotherDog.owner.name = "존";
console.log(dog);
console.log(otherDog);
console.log(anotherDog);