// higher order function 
// 1. Take one or multiple function as arguments
// 2. return a function

function oddEvenTest(request){
    if(request == "odd"){
        return function(num){
            console.log(!(num%2==0));
        }
    }else if(request == "even"){
        return function(num){
            console.log((num%2==0));
        }
    }else{
        console.log("Wrong Request.")
    }
}

let func = oddEvenTest("odd");
func(8);