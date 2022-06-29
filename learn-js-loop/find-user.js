let collegeStudent = [
  { name: "kd", email: "kdansari@gmail.com", age: 22 },
  { name: "gd", email: "gd@gmail.com", age: 21 },
  { name: "hd", email: "hd@gmail.com", age: 24 },
  { name: "harun", email: "ha@gmail.com", age: 28 },
];

function info(name, email) {
  for (let i = 0; i < collegeStudent.length; i++) {
    if (collegeStudent[i].name === name || collegeStudent[i].email === email) {
      return collegeStudent[i];
    }
  }
  return "not here";
}
// console.log(info("kl", ""));

function newData(name, addData) {
  for (let i = 0; i < collegeStudent.length; i++) {
    if (collegeStudent[i].name === name) {
      let change = collegeStudent[i];
      let newAdd = { ...change, ...addData };
      collegeStudent[i] = newAdd;
    }
  }
  return collegeStudent;
}
console.log(newData("kd", { play: "pubg" }));
