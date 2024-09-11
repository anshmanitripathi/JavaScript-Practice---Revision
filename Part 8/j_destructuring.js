let arr = ["Ansh", "Hariom", "Pathak", "Abc", "xyz", "pqr"];

// let winner = arr[0];
// let runnerup = arr[1];

// console.log(winner);
// console.log(runnerup);

let [winner , runnerup] = arr;

console.log(winner);
console.log(runnerup);

// also for others 

let [first , second, ...others] = arr;

console.log(first);
console.log(second);
console.log(others);
