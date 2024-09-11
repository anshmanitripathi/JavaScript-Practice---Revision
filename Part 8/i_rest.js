// Rest - Opposite of spread.
//      Allow a function to take indefinite number of argument and bundle them into an array.
//      arguments - it is collection that stores the aguments that are passed in the function.
//                   the array methods are not applicaple on arguments collection.


function Sum(...args){
    for(item of args){
        console.log(`you gave us ${item}`);
    }
}

Sum(5,8,6,367,2,45,6);


function min(msg ,...args){

    console.log(msg)

    return args.reduce((minimum,element)=>{
        if(minimum>element){
            return element
        }else{
            return minimum
        }
    });
}


console.log(min("Printing minimum",1,2,3,4,5,6,7,-1,-9));
