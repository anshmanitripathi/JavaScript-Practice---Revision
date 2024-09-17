let inp = document.querySelector("#toDoText");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", ()=>{
    if(inp.value.length > 0){
        let li = document.createElement("li");
        li.innerText = inp.value;
        ul.appendChild(li);
        inp.value = '';

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");
        li.appendChild(delBtn);

        delBtn.addEventListener("click", function () {
            li.remove();  
        });

    }else{
        alert("Please Enter Something.")
    }
})
