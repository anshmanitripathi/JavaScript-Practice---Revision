// Findthelargestnumberinanarraywithonlypositivenumbers

let arr = [2,45,13,24,57,89,14];
let max = arr[0];
for(let i = 0; i<=arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(`Maximum of ${arr} is ${max}.`);