const dog = {
  name: "바둑이",
  birth: 2021,

  get age() {
    return new Date().getFullYear - this.birth;
  },
  set age(age) {
    this.birth = new Date().getFullYear() - age;
  }
}

// extensisble : 확장 가능한지 안 한지 알 수 있다.

console.log(Object.isExtensible(dog));
// preventExtenstons = 확장만 막아놓는다.
Object.preventExtensions(dog);
dog.toy = ['뼈다귀'];
console.log(dog);

delete dog.name;
console.log(dog);

// seal:밀봉 봉인하다. :물개 : property 추가 삭제 금지.

const cat = {
  name: '복다주',
  birth: 2013,

  get age() {
    return new Date().getFullYear - this.birth;
  },
  set age(age) {
    this.birth = new Date().getFullYear() - age;
  }
}

console.log(Object.isSealed(cat));
Object.seal(cat);
console.log(Object.isSealed(cat));

cat['toy'] = ['캣잎'];

console.log(cat);
delete cat.age;
console.log(cat);

// Freezed 동결 : 읽기 외에 모든 기능 불가능하다, 값 수정 삭제, 프로퍼티 수정 삭제 불가

const hamster = {
  name: "햄찌",
  birth: 2023,
  toy: ['챗바퀴', '톱밥'],

  get age() {
    return new Date().getFullYear - this.birth;
  },
  set age(age) {
    this.birth = new Date().getFullYear() - age;
  }
}

console.log(Object.isFrozen)
Object.freeze(hamster); //속성값이 원시값이 아니라 참조값이면 그 참조값의 값이면 변경 됨
Object.freeze(hamster.toy); //
hamster.birth = 2011;
console.log(hamster);
delete hamster.age;
console.log(hamster);
hamster.toy[0] = '휴지심';

// Object.