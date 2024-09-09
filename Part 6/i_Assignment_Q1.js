// Qs1.WriteaJavaScriptfunctionthatreturnsarrayelementslargerthananumber;

function ArrayLargerNumber(arr, n){
    let newArr = [];
    for(let i = 0; i<=arr.length; i++){
        if(arr[i] > n){
            newArr.push(arr[i]);
        }
    }
    return newArr;

}

let arr = [2 , 78 , 56 , 45 , 234 , 556 , 90, 33, 23];

console.log(ArrayLargerNumber(arr, 50));