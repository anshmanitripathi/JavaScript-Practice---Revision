// arr.some(function)

// return true if some element of the array returns the true for the function. if none element return false.


let arr = [1,2,3,4,5,6,7,8,9,10];

a = [1,16,19,2,5,8];

let isSomeMultipleOf3 = arr.some((element)=> element%3 == 0)


let is_SomeMultipleOf3 = a.some((element)=> element%3 == 0)



console.log(isSomeMultipleOf3);
console.log(is_SomeMultipleOf3);