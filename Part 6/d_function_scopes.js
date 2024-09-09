let greet = "Hello"; // global scope

function ChnageGreet(){       // block scope
    let greet = "Namstey";
    console.log(greet);

    function innerFunction(){   // lexocal scope
        console.log(greet);
    }

    innerFunction();
}

console.log(greet);
ChnageGreet();