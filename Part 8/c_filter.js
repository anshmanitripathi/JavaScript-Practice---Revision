// arr.filter(function)

//  filter element based on a certain conition and  return a new array 

// when the function returns true for a element only that elemet are store in the new array.


let arr = [1,2,3,4,5,6,7,8,9,10];

let even = arr.filter((element)=>{
    return (element%2==0)
})

let odd = arr.filter((element)=>{
    if(element%2!=0){
        return true;
    }
})


console.log(even);
console.log(odd);