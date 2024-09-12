let Student = {
    name : "Ansh",
    age : 19,
    grade : 12,
    marks : [45,78,45],
    city : "gkp",
}

let {name, grade, marks : result  } = Student;

console.log(name);
console.log(grade);
// console.log(marks);
console.log(result);
