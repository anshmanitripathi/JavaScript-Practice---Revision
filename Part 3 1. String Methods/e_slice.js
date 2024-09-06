// return partof a string s new string.

// str.slice(strat index, end index`non inclusive`);

//  str.slice(start);   ending will be last of string.

//  str.slice(-number);     ( -number = str.length - number )


let str = "Hello my name is ansh, and i love coding";

let len = str.length;

console.log(str.slice(0,4));
console.log(str.slice(5));
console.log(str.slice(-5));
console.log(str.slice(len - 5));
