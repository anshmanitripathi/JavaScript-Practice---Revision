let a = [3., 75, "GFG", 78]

let b = [3., 75, "GFG", 78]

console.log(a==b);
console.log(a===b);   /** Here even if the values are same but internally in memeory two different arrays are created. hence their refrences  are different */

//  but if a copy a array then the same reference is assigned to that array

let arr = [1,2,3,4,5,6,];

let arrCopy = arr;

console.log(arr == arrCopy);
console.log(arr === arrCopy);