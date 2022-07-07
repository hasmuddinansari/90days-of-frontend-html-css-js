// // class Student {
// //   constructor(name, clas, age, rollNum) {
// //     this.name = name;
// //     this.clas = clas;
// //     this.age = age;
// //     this.rollNum = rollNum;
// //   }
// // }
// // const listOfDetails = new Student("kd", "12th", 17, 34);
// // console.log(listOfDetails);

// // class Product {
// //   constructor(name, price) {
// //     this.name = name;
// //     this.price = price;
// //   }

// //   items() {
// //     return (
// //       "this is " + this.name + " and his price is " + this.price + "$"
// //     );
// //   }
// // }
// // const productDetails = new Product("motorola", 100);
// // console.log(productDetails.items());

// class Student {
//   constructor(name, classs, email) {
//     this.name = name;
//     this.classs = classs;
//     this.email = email;
//   }

// }

// class School {
//   constructor(names) {
//     this.students = [];
//     this.names = names;
//   }
//   takeAdd(students) {
//     this.students.push(students);
//   }

//   changeName(name, secName) {
//     this.students = this.students.map(function (student) {
//       if (student.name === name) {
//         student.this.name(secName)
//         return student
//       }
//       return this.students
//     });
//   }
// }

// const student1 = new Student("kd", "10th", "kd@gmail.com");
// const std2 = new Student("gd", "9th", "gd@gmail.com");

class GdCompany {
  constructor(name, addr, wages) {
    this.name = name;
    this.addr = addr;
    this.wages = wages;
  }
  employee() {
    return (
      " employee name is " +
      this.name +
      " and he lives in " +
      this.addr +
      " and he earn " +
      this.wages +
      "$/day"
    );
  }
}
let company = new GdCompany("kd", "deoria", 5);
console.log(company.employee());
