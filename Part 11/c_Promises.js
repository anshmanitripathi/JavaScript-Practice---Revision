
// CALLBACK HELL CONDITION

// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed > 4){
//        success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "Ansh",
//     ()=>{
//         console.log("Your data1 was Saved : ", data);
//         savetoDb(
//             "PATHAK",
//             ()=>{
//                 console.log("Your data2 was Saved : ", data);
//                 savetoDb(
//                     "Anup",
//                     ()=>{
//                         console.log("Your data3 was Saved : ", data);
//                     },
//                     ()=>{
//                         console.log("Weak connection . data not found")
//                     }
//                 )
//             },
//             ()=>{
//                 console.log("Weak connection . data not found")
//             }
//         )
//     },
//     ()=>{
//         console.log("Weak connection . data not found");
//     }
// )


// REFACTORING CALLBACK HELL USING PROMISES

function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() *10)+1;
        if(internetSpeed > 4){
            resolve("Success : data saved");
        }else{
            reject("Failure : weak connection");
        }
    })
}

savetoDb("Ansh")
.then((result)=>{
    console.log("Promise was Resolved.");
    console.log(result);
    
    return savetoDb("pathak");
})
.then((result)=>{
    console.log("Promise was Resolved.");
    console.log(result);
    return savetoDb("Hari");
})
.then((result)=>{
    console.log("Promise was Resolved.");
    console.log(result);
    return savetoDb("BHanu");
})
.catch((error)=>{
    console.log("Promise was Rejected.")
    console.log(error);
})
