// 콜백함수 callBack() : 나중에 부른다. : 함수를 호출하는 주체를 남에게 권한을 준다

function sayHi() {
  console.log("Hello!", name, ' nice meet you !');
};

// sayHi();

function introduce(lastName, firstName, callback) {
  let fullName = lastName + firstName;
  callback(fullName);
};
//  sayHi callback 함수가 된다: introduce 가 대신 sayHi 호출 한다
introduce('김', '준영', sayHi)


let array = [3, 4, 5, 6, 7, 8, '34,3,6'];


let printAll = function (n) {
  console.log(n);
}