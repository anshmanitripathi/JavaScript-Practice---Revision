function avg(a,b,c){
    av = (a+b+c) / 3;
    return av;
}

console.log(avg(1,5,9));

// multiplication table

function table(num){
    for(let i = 1; i<=10; i++){
        console.log(`${i} X ${num} = ${i*num}`);
    }
}

table(5);