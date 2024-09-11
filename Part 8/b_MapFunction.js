// arr.map(function);
/** RETURN A NEW ARRAY */
// return a new array with performing operation on eact element of array defined in function.

let arr = [1,2,3,4,5,6,7,8,9,10];


let double  = arr.map((element)=>{
    return element * 2;
})

let squares = arr.map((element)=>{
    return element*element;
})

console.log(double);
console.log(squares);

