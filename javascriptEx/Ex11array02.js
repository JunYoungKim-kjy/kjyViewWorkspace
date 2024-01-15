// 코드를 DRY 하게 짜라
// D : don't R : reat : y: yourself ==> 반복되는 코드는 함수로 만들어서 재사용해라

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// for (let i = 6; i <= 15; i += 1) {
//   console.log(i);
// }

// for (let i = 15; i >= 4; i -= 1) {
//   console.log(i);
// }

function printArryay(start, end) {
  if (isNaN(start) || isNaN(end)) {
    console.log('숫자값을 입력하세요')
    return;
  }
  let result = '';
  if (start > end) {
    for (let i = end; i <= start; i += 1) {
      result += i + ' ';
    }
  } else {
    for (let i = start; i <= end; i += 1) {
      result += i + ' ';
    }
  };
  console.log(result)
}

printArryay(1, 5);
printArryay(6, 15);
printArryay(15, 4);