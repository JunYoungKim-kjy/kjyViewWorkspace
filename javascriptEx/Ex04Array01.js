let array = [];
array[3] = 100;

console.log(array)
//[ <3 empty items>, 100 ] ==> [undifined ,undifiend, undefined , 100] 
// empty == undifined

array = [1, '2', true, NaN, {},
  [100, 200, 310, 123],
  [], 12.123123, undefined, null
];
console.log(array);

console.log(array[0]);

for (let i = 0; i < array.length; i += 1) {
  console.log(`index ${i} = ${array[i]}`);
}

let arr = new Array(); // let arr = []
arr = new Array(3);
console.log(arr);
arr[-213] = 'test';
console.log(arr[-213]);
console.log(arr[2]);
console.log(arr.length);