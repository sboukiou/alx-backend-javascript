import listOfStudents, { StudentHolberton, HolbertonClass } from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted)

console.log(listOfStudents[0] instanceof StudentHolberton);
console.log(listOfStudents[0].holbertonClass instanceof HolbertonClass);
