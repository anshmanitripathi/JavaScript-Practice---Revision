let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", ()=>{
    h1.innerText = randomColor();
} )

btn.addEventListener("click", ()=>{
    div.style.backgroundColor = randomColor();
} )




function randomColor(){
    return `rgb(${random()},${random()},${random()})`
}

function random(){
    return Math.floor(Math.random() * 255) + 1;
}