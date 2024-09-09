// Createanobjectrepresentingacarthatstoresthefollowingpropertiesforthecar:name,model,color.Printthecar’sname

const car = {
    name : "G Wagon",
    model : 123,
    color : "brown",
}

console.log(car.name);
console.log(car["name"]);

car.name = "odi";
car.price = "10000000";

console.log(car);