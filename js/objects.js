//create a structure of a single task
const task={
    taskName: "",
    taskDate: "",
    taskTime: "",
}

const userTask = {
    //Fields
    allTasks : [], //collection of tasks

    //methods
    saveTasks: ()=>{  //save task into the local storage      
        localStorage.setItem("tasks",JSON.stringify(userTask.allTasks));
    },
    loadTasks: ()=>{
        userTask.allTasks = JSON.parse(localStorage.getItem("tasks"));
    },
    addTask : (newTask)=>{   //add task to the array of tasks and send it to the save function
        //integrity check
        console.log(newTask);    
        userTask.allTasks.push(newTask);
        userTask.saveTasks();
    },
    deleteTask: (place)=>{    //delete specific task   
        console.log(place);     
        //divRemove.remove();
        incrementedCount = Number(localStorage.getItem('count'));
        if(incrementedCount>0){
            incrementedCount-=1;
        }
        localStorage.setItem('count', incrementedCount);
        userTask.allTasks.splice(place.id , 1);
        /*if(counter==0){
            userTask.allTasks=[];
        }*/
        //userTask.loadTasks();
        userTask.saveTasks();
        myTask.innerHTML = userTask.allTasks;
        console.log(incrementedCount);

    },
};