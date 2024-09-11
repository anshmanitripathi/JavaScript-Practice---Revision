// Qs1.Write an arrow function named arrayAverage 
// that accepts an array of numbers and returns the average of those numbers

const arrayAverag = (arr) =>{
    let Sum = 0;
    for(item of arr){
        Sum = Sum + item;
    }

    return Sum;
}

let arr = [1,3,5,7,3,7,9,4,68]

console.log(arrayAverag(arr));

