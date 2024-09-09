function Sum(num){
    let sum = 0;
    for(let i = 1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(Sum(10));

// concatenation of all the strings of an array.

function ConcatArray(arr){
    let newArr = "";
    for(item of arr){
        newArr+=item;
    }
    return newArr;
}

let arr = ["hello", "hi", "ansh", "hari", "pathak"];

let newArr = ConcatArray(arr);
console.log(newArr);