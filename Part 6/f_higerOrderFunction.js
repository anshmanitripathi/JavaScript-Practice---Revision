// higher order function 
// 1. Take one or multiple function as arguments
// 2. return a function

function multipleTimes(func , count){
    for(let i = 1; i<=count; i++){
        func();
    }
}

function greet(){
    console.log("Hello");
}

multipleTimes(greet, 10);