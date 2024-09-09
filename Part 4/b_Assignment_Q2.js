// WriteaJSprogramtofindthesumofdigitsinanumber.Example:ifnumber=287152,sum=25

let num = 287152;
let n = num;

let Sum = 0;

while(n != 0 ){
    let r = n % 10;
    Sum = Sum + r;
    // n = Math.floor(n / 10);
    n = parseInt(n / 10);

}

console.log(`Sum of number ${num} is ${Sum}`);