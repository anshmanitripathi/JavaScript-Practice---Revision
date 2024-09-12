let p = document.createElement("p");
p.innerText = "Hello i am Ansh";
document.querySelector("body").append(p);

p.classList.add("redColor");

let h = document.createElement("h3");
h.innerText = "Hello, i am H3 Heading.";
document.querySelector("body").append(h);

h.classList.add("blueColor");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("p");

h1.innerText = "I am in a div";
para.innerText = "me too";

div.append(h1);
div.prepend(para);

div.classList.add("box");

document.querySelector("body").append(div);