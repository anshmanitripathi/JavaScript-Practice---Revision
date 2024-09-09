const max = prompt("Enter the maximum range  : ");
let random = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess the Number : ");

while(true){
    if(guess == "quit"){
        console.log(`Quiting the game.`);
        break;
    }
    if(guess == random){
        console.log(`Congratulations, You guessed the right Number! it is ${random} `);
        break;
    }else if(guess < random){
        guess = prompt("Number is greater than your guess. Try Again : ");
    }else if(guess > random){
        guess = prompt("Number is less than your guess. Try Again : ");
    }
}