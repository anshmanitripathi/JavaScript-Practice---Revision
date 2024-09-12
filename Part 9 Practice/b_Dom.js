// Create a new input and button element on the page using JavaScript only.
// Setthetextofbuttonto“Clickme”;

let btn = document.createElement("button");
let inp = document.createElement("input");
btn.innerText = "Clickme";
document.querySelector("body").append(btn);
document.querySelector("body").prepend(inp);



// Addfollowingattributestotheelement:-
// Change placeholder value of input to“username”-
// Change the id of button to “btn”

inp.setAttribute("placeholder","username");
btn.setAttribute("id","btn");


// Access the btn using the query Selector and button id.
// Change the button background color to blue and text color to white.

document.querySelector("#btn").classList.add("blue-btn");


// Create an h1 element on the page and set its text to “DOMPractice” underlined.
// Change its color to purple

let h1 = document.createElement("h1");
h1.innerText = "DOM Practices";

h1.classList.add("purple","underline");
document.querySelector("body").prepend(h1);

// Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.

let para = document.createElement("p");
para.innerHTML = "Apna College <b> Delta </b> Practices";

document.querySelector("body").append(para);


