// Counter 라는 클래스를 만들고 value 변수를 캡슐화 하기
// public increase() -올리다- 메서드를 통해서 value의 값을 증가시키기
// 예외조건 set 통해서 value 수정 할 때 음수 값은 들어갖 ㅣ않게 설정

class Counter {
  #value
  constructor(value) {
    if (value < 0 || isNaN(value)) return console.log('올바르지 않은 갑입니다. 0 이상의 숫자를 입력하세요');
    this.#value = value;
  }

  get value() {
    return this.#value;
  }
  set value(value) {
    value > 0 ? this.#value = value : this.#value = 0;
  }
  increase() {
    this.#value += 1;
  }

}

const counter1 = new Counter(-100);

const counter = new Counter(5);
console.log(counter);
console.log(counter.value);
counter.increase();
counter.increase();
counter.increase();
console.log(counter.value);

counter.value = -100;
console.log(counter.value);


console.log(Object.getOwnPropertyDescriptors(Counter));