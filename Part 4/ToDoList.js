let todo = []

let req = prompt("Enter the task you have to performed : ");

while(true){
    if(req == "quit"){
        console.log("Quiting App");
        break;
    }
    if(req == "list"){
        console.log("_____________________________________________________");
        for(let i =0;i<=todo.length;i++){
            console.log(i + " " + todo[i]);
        }
        console.log("_____________________________________________________");
    }else if(req == "add"){
        let task = prompt("Enter the task you want to add : ")
        todo.push(task);
        console.log("Task Added");
    }else if(req == "delete"){
        let idx = prompt("Enter the index you want to delete the task : ");
        todo.splice(idx , 1);
        console.log("Task Deleted.");

    }else{
        console.log("Wrong request.")
    }

    req = prompt("Enter the task you have to performed : ");



    
}