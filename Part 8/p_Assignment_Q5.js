// Write a function called mergeObjects that accepts two objects and returns 
// a new object which contains all the keys and values of the first object and second object


let Student = {
    name : "Ansh",
    age : 20,
}

let Bike = {
    Bikename : "hero",
    price : 1000000,
    engine : 200,
}

const mergeObjects=  (obj1,obj2)=>({...obj1,...obj2});

// let obj = {...Student, ...Bike};
// console.log(obj);

console.log(mergeObjects(Student,Bike));