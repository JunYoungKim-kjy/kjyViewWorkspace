console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3); //자바는 정수 / 정수 => 정수가 나오는데 : js 정수 / 정수 => 실수
console.log(10 % 3);
console.log(Math.pow(10, 3)); //거듭제곱 10*10*10
console.log(10 ** 5);

console.log(2 - 'test'); //NaN
console.log(10 / 0); //Infinity : 자바에서는 에러뜬다
console.log(0 / 10); // 0

// String의 종류 ""(쌍따옴표:더블쿼테이션) ''(홑따옴표 : 싱글코테이션) ``(백틱 :키보드 1옆에 있는거 그냥 누르면 됨)(백틱 : 챔피언 조준)

let intro = '김준영\\n입니다 \\';
console.log(intro);
intro = '"김준영"\\n입니다 \\';
console.log(intro);
intro = "'김준영'\\n입니다 \\";
console.log(intro);
intro = `김준영입니다`;
// ``스트링 템플릿을 만들 수 있다.
let name = "김준영";
const jop = "학생";

intro = `저는 ${name}입니다 직업은 ${jop}입니다`;
console.log(intro);
intro = '저는 ${name}입니다 직업은 ${jop}입니다';
intro = "저는 ${name}입니다 직업은 ${jop}입니다";
//boolean 타입은 동일하다
let isDead = true;
console.log(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!isDead);

// falsy value : 값으로 인식하지 않는 값

console.log(!!0); // 숫자 0 
console.log(!!""); // 문자 빈문자열 
console.log(!!null); //비어있는 주소값
console.log(!!undefined); //
console.log(!!NaN);

// let cat = undefined; //왠만해서는 하지마세요.
// cat; 과 동일
let cat = null; //비어있는값을 원하면 null 사용;
console.log(cat)


// truly value : 

console.log(!!10); // 0 제외한 모든 숫자 
console.log(!!-10.123); // 음수도 동일
console.log(!!"test"); // 비어있지 않는 모든 문자 
console.log(!![]); //new Array(); 자바로 봤을때 new ArrayList();
console.log(!!{}); //new Object();
console.log(!!Infinity);

// symbol type : 유일무이한 값
const num1 = '1';
const num2 = '1';
console.log(num1 == num2);
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 == symbol2);

// Object type = java Map ==> key 와 value 로 이뤄져있다

// const dog ={ // key값에는 원시값(: 주의!! String은 js에서 원시값) 만 들어갈 수 있는데 왠만하면 String만 사용하자.
//   name : '바둥기',
//   age : 12,
//   isOwner : true

// }

// let dog ={
//   10 : '십',
//   undefined : '정의되지않는값',
//   null : '비어있는값',
//   // [] : '참조값은 key로 못쓴다'
//   // [10,2] : '배열'
// }
dog = {
  name: '바두기',
  age: 4,
  isMale: true
};
console.log(dog);
console.log(dog.name);
console.log(dog["name"]); // dog[name]하면 에러뜬다 꼭 String으로 key값 넣어주기

// 오브젝트 값(속성값) 접근 방법 2가지 
console.log(dog.name);
console.log(dog["name"]); // dog[name] 하면 에러 뜬다 꼭 스트링으로 key값 넣어주기 ! 

function getKeyValue(object, key) {
  console.log(object[key]);
}

function getKeyValue2(object, key) {
  console.log(object.key); // 순수하게 key 하는 속성값을 객체 안에서 찾는것 : 동적으로 못 바꾼다 

  if (key == 'age') {
    console.log(object.age);
  }
}

getKeyValue(dog, 'age');
getKeyValue(dog, 'isOwner');
getKeyValue(dog, 'name');

getKeyValue2(dog, 'age');

// 객체 값 추가 & 삭제
dog['ownerName'] = "제임스";
console.log(dog);

dog.ownerAge = 10;
console.log(dog);

delete dog.ownerAge;
console.log(dog);
delete dog['ownerName']
console.log(dog);