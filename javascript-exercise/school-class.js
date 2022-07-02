class Student {
  constructor(name, clas, email) {
    this.email = email;
    this.name = name;
    this.clas = clas;
  }
  setClass(clas) {
    this.clas = clas;
  }
}

class School {
  constructor(name) {
    this.students = [];
    this.name = name;
    this.studentsSize = 0;
  }
  takeAdmission(student) {
    this.students.push(student);
    this.studentsSize += 1;
  }

  changeClass(email, whichClass) {
    // this.students = this.students.map((student) => {
    //   if (student.email === email) {
    //     student.setClass(whichClass);
    //     return student;
    //   }
    //   return student;
    // });
    // return;
    const student = this.students.find((student) => student.email === email);
    student.setClass(whichClass);

    const studentIndex = this.students.findIndex(
      (student) => student.email === email
    );
    if (studentIndex >= 0) {
      this.students.splice(studentIndex, 1, student);
    }
  }

  getStudentsSize() {
    return this.studentsSize;
  }
  getStudentsList() {
    return this.students;
  }
}

const ghazibadSchool = new School("MMH College");
const student1 = new Student("Khusmuddin", 10, "kd@gmail.com");
const student2 = new Student("Hasmuddin", 12, "md@gmail.com");
ghazibadSchool.takeAdmission(student1);
ghazibadSchool.takeAdmission(student2);
ghazibadSchool.changeClass("kd@gmail.com", 15);

console.log(ghazibadSchool.getStudentsList());
