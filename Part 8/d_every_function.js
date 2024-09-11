// arr.every(function)

// return true if every element of the array returns the true for the function. else return false.


let arr = [1,2,3,4,5,6,7,8,9,10];

a = [3,6,9,12,15,18];

let isMultiple3 = arr.every((element)=> element%3 == 0)

let is_Multiple3 = a.every((element)=> element%3 == 0)

console.log(isMultiple3);
console.log(is_Multiple3);