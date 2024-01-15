console.log('test')
/*
변수 선언하기
자바 로컬변수     vs    자바스크립트 변수
반드시 초기값 필요    초기값 없으면 undifined
변수에 자료형 존재    변수에 자료형 없음

기본형 타입
int,                    let,
boolean,                const(final : 상수),
double,                 var
char..etc                    
*/

//변수 선언하기

// let num; // int num = 10;
console.log(typeof num);
num = 10;
console.log(typeof num);
num = true;
console.log(num);
num = 10.1234;
console.log(num);
const name = 'ㄹ';
console.log(typeof name);
// name = '오은영'; const 자바에서 키워드 final과 동일하다. (상수)
console.log(name);

//변수 이름 : naming conventions : 네이밍 컨벤션
/*
Naming Conventions

변수 이름 지을 때
1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
2) 특수 기호는 언더스코어 _와 달러 $ 를 사용 할 수 있다.
3) 숫자로 이름을 시작 할 수 없다.
4) 키워드는 변수명으로 사용 할 수 없다.
*/
var age = 100;
var age = 2;
console.log(age);
let num = 10;