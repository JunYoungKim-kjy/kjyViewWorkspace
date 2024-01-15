const cat = {};
// 모든 객체에 존재하는 속성값 : object에서 상속받은 값
console.log(cat.__proto__); // __proto__ 부모 클래스에 해당된다.
// 프로토타입 체인 [].__proto__ => Array.__proto__ => object



function Pet(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Pet.prototype);
console.dir(Pet.prototype, {
  showHidden: true
});

console.log(Pet.prototype.constructor == Pet);
console.log(Pet.prototype.constructor.prototype == Pet.prototype);


const dog = new Pet('바둑', 5);

console.log(dog.__proto__ === Pet.prototype);
console.log(Pet.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.__proto__ === Object.prototype);


// configurable : false => 다시 defineProperty 를 할 수 없다.
Object.defineProperty(dog, 'name', {
  writable: false,
  // configurable: false,
})
// Object.defineProperty(dog, 'name', {
//   writable: true,
// })
console.log(Object.getOwnPropertyDescriptors(dog));

dog.name = '흰둥이';
dog.toy = ['뼈다귀'];

console.log(dog);

Object.defineProperty(dog, 'name', {
  enumerable: false,
})

console.log(dog);

Object.defineProperties(dog, {
  name: {
    value: '흰둥이',
    writable: true,
    enumerable: false,
    configurable: false
  },
  age: {
    value: '흰둥이',
    writable: true,
    enumerable: false,
    configurable: false
  }
})