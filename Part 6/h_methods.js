//  Methods - 
// functions defined inside a object is called a method.

let Calculator = {

    Name : "ANSH",
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    }, 
    multiply : function(a,b){
        return a*b;
    } 
}

console.log(Calculator.add(3,5));

let Cal = {

    Name : "ansh",

    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    }, 
    multiplyn(a,b){
        return a*b;
    } 
}

console.log(Calculator.Name);
console.log(Cal.Name);