let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);
console.log(...arr);


// spread with array literals

let newArr = [...arr];             /** To create the copy of a array "arr" */

console.log(newArr);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let num = [...odd , ...even];       /** to concatenate two arrays eg. odd & even */

console.log(even)
console.log(odd)
console.log(num)


// spread with object literals

const data = {
    name : "ansh",
    age : 20.
};

const dataCopy = {...data};
console.log(dataCopy);

// arrays as objects

let obj = ["Ansh", "Hari","pathak"];
let obj1 = {...obj};        /** the index of arrays becomes keys and value becomes value. */

console.log(obj1);