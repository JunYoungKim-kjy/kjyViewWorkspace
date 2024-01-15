// while, for, do while

let i = 1;
while (i <= 10) {
  console.log(i);
  i += 1;
}

i = 100;
do {
  console.log(i)
  if (i == 95) {
    break;
  }
  i -= 1;
} while (i > 90);
//  for - in : key 출력하는 for문 : 배열에서 키는 index 출력, 
let array = [10, 20, 30, 40, 50, 60]; //왠만하면 array에 같은 타입으로만 사용할 것!

for (let i in array) {
  console.log(i);
}
console.log("-------------------------");


//  for - of : iterable 한 객체만 사용 할 수 있다 : looping할 수 있는 타입만 가능하다.
for (let i of array) {
  console.log(i);
}
console.log("-------------------------");
let dog = {
  name: '오송',
  age: 9,
  owner: {
    name: "김준영"
  }
}
for (let key in dog) {
  console.log('key = ', key, '/  value = ', dog[key]);
  console.log(`key = ${key} , value = ${dog[key]}`);
}
console.log("-------------------------");
// for
// for (let value in dog) {
//   console.log();
// }