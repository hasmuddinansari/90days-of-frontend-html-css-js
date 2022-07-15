// // resolve
// // reject

// // a promise is an object which return some value sometime in future.

// const promise1 = new Promise(function (resolve, reject) {
//   resolve("yes");
//   reject("no");
// });

// function checkNumber(num) {
//   const promise = new Promise(function (res, rej) {
//     if (typeof num === "number") {
//       res(`${num} is a number`);
//     } else {
//         throw new Error('This is not a number')
//     //   rej(`${num}, this is not a number`);
//     }
//   });
//   return promise;
// }

// // 1. then and catch

// // checkNumber("129")
// //   .then(function (value) {
// //     console.log("then", value);
// //   })
// //   .catch((err) => {
// //     console.log("err", err);
// //   });

// // 2 . make promise 1. new Promise()

// // async await

// async function createPromise(num) {
//   if (typeof num === "number") {
//     return num;
//   }
//   throw new Error("ERROR");
// }

// async function resolved() {
//   try {
//     const value = await checkNumber(39);
//     console.log(value);
//   } catch (err) {
//     console.log("ERR", err.message);
//   }
// }

// resolved();

