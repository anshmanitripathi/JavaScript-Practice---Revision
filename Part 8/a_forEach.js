// forEach(function)
//  Array method that is used to perform a specific operation on each element of the arrat.

let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr =[]

function print(element){
    console.log(element);
}
arr.forEach((element)=>{
    console.log(element);
    if(element > 5){
        newArr.push(element);
    }
})

console.log(newArr)

let ar = [2,4,6,8,10,12,14];
ar.forEach(print);