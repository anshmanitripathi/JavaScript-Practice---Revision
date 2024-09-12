// Square and sum the array element s using the arrow function and then find the average of the array.

let arr = [1,2,3,4,5,6,7,8,9,10];

let sq = arr.map((element)=> element*element);
let sum = sq.reduce((s,ele)=>s+ele);
let avg = sum/arr.length;

console.log(avg);