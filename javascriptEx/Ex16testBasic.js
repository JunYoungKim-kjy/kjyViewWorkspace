// 자바스크립트에서 랜덤으로 값을 가져오기

// console.log(Math.random());
// console.log(Math.random() * 10); // 0 ~ 9
// console.log(Math.random() * 100); // 0 ~ 99
/*
1. 1~100사이의 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수 인지 출력하는 checkNum함수를 만든 후 호출
*/
function getRandomNum(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNum(0, 100));

function checkNum(num) {
  return num % 2 === 0 ? '짝수' : '홀수'
};
console.log(checkNum(getRandomNum(0, 100)));
console.log("===================================");




/*
  2.배열에 랜덤으로 (-100 ~ 100 사이의 숫자를 4개를 저장 후 전부 홀수 인지 검사하는 isALLoddNum 함수를 만드시오.)
*/
function isAllOddNum() {
  let arr = [1];
  for (idx in arr) {
    arr[idx] = getRandomNum(-100, 100);
  }
  let cnt = arr.reduce((cnt, value) => {
    // console.log(`value = ${value} cnt = ${cnt}`);
    return value % 2 !== 0 ? cnt += 1 : cnt;
  }, 0);
  // console.log(arr);
  console.log(cnt);
  console.log(arr.length);
  return cnt === arr.length ? '모두 홀수 입니다.' : '홀수가 아닌 수가 있습니다.';
}
console.log(isAllOddNum());