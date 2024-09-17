//  CALLBACK HELL



let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed.")
        }, delay)
    })
}

// changeColor("red", 1000, ()=>{
//     changeColor("yellow", 1000,()=>{
//         changeColor("blue", 1000, ()=>{
//             changeColor("green", 1000);
//         });
//     });
// });

changeColor("red",1000)
.then(()=>{
    return changeColor("blue", 1000)
})
.then(()=>{
    return changeColor("green", 1000)
})
.then(()=>{
    return changeColor("yellow", 1000)
})
.then(()=>{
    return changeColor("pink", 1000)
})
.catch(()=>{
    console.log("Color not chnaged");
})
