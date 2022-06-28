// 1st problem------push in b but common numbers
// let a = [10,23,33,33,54,33]
// let b = [];

// for(i=0; i<a.length; i++){
// if(a[i]===33){
//     b.push(a[i])
// }
// }
// console.log(b)

//  2nd problems------restrication

// let age = 18;
// if(age < 18){
//     console.log('No..')
// }
// else if (age===18){
//     console.log("Yes")
// }
// else {

//     console.log("abs yessss")
// }

//3rd problem-------push in c with the help of loop

// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];
// let c = [];

// for (i = 0; i < a.length; i++) {
//   c.push(a[i]);
// }
// for (m = 0; m < b.length; m++) {
//   c.push(b[m]);
// }
// console.log(c);

// 4th problem.....squared of [2 or 3 ]

// let a = [2, 3, 4, 5];
// let b = [];
// for(i=0; i<a.length; i++){
//     b.push(a[i]**2)
// }
// console.log(b);

// 5th problem------ the sum of array

// let sum = 0;
// let a = [5, 6, 7, 8, 9, 11];
// let b = [];
// for (i = 0; i < a.length; i++) {
//   sum += a[i];
// //   console.log("sum of array", sum);
//   b.push(sum)
// }

// console.log(b)

// 6th problem------------------------odd even number
let a = [10, 12, 11, 23, 32, 112, 21, 11];
let even = [];
let odd = [];
for (i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {

    even.push(a[i]);
  } else {

    odd.push(a[i]);
  }
}
console.log(even,odd);
