const task = ['add task' , 'view task' , 'toggle task complition' , 'edit task' , 'delete task', 'exit'];


   for(let i=0 ;i<task.length;i++ ){

        console.log(`${i+1}. ${task[i]}`);
    }  
    let taskDescription ;
let choise;
let tasks =[];
    do{  choise = Number(prompt("Enter your choice {1-6}"));
     

if (choise === 1){
    tasks.push(taskDescription);
    taskDescription = prompt("enter the task description");
  console.log(` ${prompt} `);
  
}  else if (choise === 2) {
             for (let j = 0; j<tasks.length; j++) 
                {
                console.log(`${j +1}+ ${tasks[j]}`);  
            }
        
        
    
        }else if(choise === 3){
            let taskIndexs = Number(prompt("Enter the task index to toggle completion:"));  
            
                tasks[taskIndexs - 1] = !tasks[taskIndexs - 1];  
                let newStatus = tasks[taskIndexs - 1] ? "Completed" : "Not Completed";
                console.log(`Task ${taskIndexs} is now ${newStatus}`);

            
}else if(choise === 4){
    let taskIndex = Number( prompt("enter the number you need to change"));
    let  newTask = prompt("enter the description ");
    tasks[taskIndex -1] = newTask;  
   console.log(`"task added :" ${tasks} `);

}else if(choise === 5){
   let taskIndex = Number( prompt("enter the number you need to delete"));
   tasks.splice(taskIndex - 1, 1); 
   console.log(`"task added :" ${tasks} `);

}
else{
    console.log("your choise is wrong")
}
}while(choise <6)
