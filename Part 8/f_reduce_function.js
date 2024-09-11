// arr.reduce(function(accumlator,element));

// reduce the array to a singke value


let arr = [1,2,3,4,5,6,7,8,9,10];

let Sum = arr.reduce((sum, element)=>{
    return sum+element;
})

console.log(Sum);

let Max = arr.reduce((max, element)=>{
    if(element > max){
        return element
    }else{
        return max;
    }
})

console.log(Max);
