// 1. forEach --- iterate and log from 1 to 10

// let a = [1,2,3,4,5,6,7,8,9,10]

// a.forEach(function (ele,ind,arr,){
//     console.log(ele,ind,arr)

// })

// 2. forEach .... iterate and push in new Array if element is odd

// let a = [1,2,3,4,5,6,7,8,9,10]

// a.forEach(function(ele, ind, arr){
//     if(ele%2!=0){
//         console.log("odd",ele)
//     }
// })

//3. some .... [1,2,3,4,5]  is 3 available in this array???

// let a = [1, 2, 3, 4, 5];
// let b = a.some(checkNumber);
// function checkNumber(number) {
//   return number ===3;
// }
// console.log(b)

// 4. every ....['pass', 'pass', 'pass'] is every student passed??

// let student = [38, 33, 44]
// let passed = student.every(right)

// function right(number){
//     return number>=25;
// }
// console.log(passed)

// 5. filter .... [10,20,30,40,50]  get all numbers which is greater than 20

// let a = [10,20,30,40,50]
// let b = a.filter(filtr);

// function filtr(nmb){
//     return nmb>=20;
// }
// console.log(b)

// 6. filter ... [{name:"kd", age:10}, {name:"md", age:29}, {name:"ks", age:9}]  // get all student who is less than 15yrs old.

// let arr = [{name:"kd", age:10}, {name:"md", age:29}, {name:"ks", age:9}]
// let ageFilter = arr.filter(function(ele){
//     return ele.age<18;
// });

// console.log(ageFilter);

// 7. find .... using same array above find a student which name is "ks"

// const user = [
//   { name: "kd", age: 10 },
//   { name: "md", age: 29 },
//   { name: "ks", age: 9 },
// ];

// function findUserByName(list, name) {
//   const search = list.find(function (ele) {
//     return ele.name === name;
//   });
//   return search;
// }

// // console.log(findUserByName(user, 39))

// // use of map

// const array = [1, 2, 3, 4];
// const squared = [];

// array.forEach(function (ele) {
//   squared.push(ele ** 2);
// });

// // console.log(squared)

// function convertTo(arr, power) {
//   const newSquared = arr.map(function (value) {
//     return value ** power
//   });

//   return newSquared
// }

// [12,13,19]

// function getListAge(arr){
//    const result =  arr.map(function(ele){
//         return ele.age
//    })
//    return result
// }

// // console.log(convertTo(array, 2))

// // console.log(getListAge(user))

// const listOfAge = getListAge(user)

// function converToObject(list){
//     return list.map(function(ele){
//         return {'age': ele, name:ele, class:ele }
//     })
// }

// const students = [{first:'kd', last:'ansari'}, {first:'hd', last:'ansari'}]

// const result  = students.map(function(student){
//         return { ...student, fullName:`${student.first} ${student.last}`}
// })

// // console.log(result)

// const person = {
//     name:"kd",
//     last:"ansari",
//     age:22,
//     getFullName:function(name){
//         return this.name + this.last + name
//     }
// }

// console.log(person.getFullName('kumar'))

// console.log(converToObject(listOfAge))

// const twoDArr = converToObject(listOfAge)

//   map()

// const players = [
//   { name: "rahul", last: "singh", play: "cricket" },
//   { name: "kd", last: "ansari", play: "footbal" },
//   { name: "gd", last: "ahmad", play: "nothing" },
//   { name: "hd", last: "khan", play: "footbal" },
//   { name: "harun", last: "malik", play: "mario" },
// ];
// function findPlayerName(names) {
//   const search = names.map(function (name) {
//     return name.name + " " + name.play
//   });
//   return search;
// }
// console.log(findPlayerName(players));

// function findPlayerName(list, name) {
//   let search = list.find(function (playerName) {
//     return playerName.name === name;
//   });
//   return search;
// }
// console.log(findPlayerName(players,"kd"))
// let names = ['a','c','b']
let a = [2, 1, 44, 5, 3, 22, 7];
let b = a.sort(function (a, b) {
  return a - b;
});
// console.log(b);array




