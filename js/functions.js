//pointers to our html elements
let mission=document.getElementById('mission');
let dateMission=document.getElementById('dateMission');
let timeMission=document.getElementById('timeMission');
let myTask=document.getElementById('myTasks');
let messageBox=document.getElementById('messageBox');

//localStorage.setItem('count',-1);
//let incrementedCount = Number(localStorage.getItem('count'));
//console.log(incrementedCount);
let incrementedCount=0;

function init(){
    incrementedCount = localStorage.getItem("count")>0? JSON.parse(localStorage.getItem("count")): 0;
    //incrementedCount = localStorage.getItem("count");
    console.log(incrementedCount);
    if(localStorage.getItem("tasks")){
        userTask.allTasks=JSON.parse(localStorage.getItem("tasks"));
    }
    else{
        userTask.allTasks=[];
    }
    //userTask.loadTasks();
    if(userTask.allTasks.length){
        myTask.innerHTML=userTask.allTasks;
    }
}

//let newTask;
function getProject(){
    //check empty fields
    if(!mission.value||!dateMission.value||!timeMission.value){
        messageBox.innerHTML="*one or more of the fields are empty";
        return;
    }
    //save data
    //we will use spread operator for copying the model data to new object
    let newTask = {...task};
    newTask.taskName = mission.value;
    newTask.taskDate = dateMission.value;
    newTask.taskTime = timeMission.value;
    //מאתחלת את הדיב המרכזי שלא יהיו אפקטים
    myTask.innerHTML=userTask.allTasks;
    createTasks(newTask);
    //counter+=1;
    incrementedCount = Number(localStorage.getItem('count'));
    console.log(incrementedCount);
    incrementedCount+=1;
    localStorage.setItem('count', incrementedCount);
    //newTask.counter=counter;
    //integrity check
    console.log(incrementedCount);
    clearFields();
}

function createTasks(newTask){
    //create the new note
    let newNote=`
    <div class='addDiv'>
    <i  class='glyphicon glyphicon-remove iconX' id=${incrementedCount/*userTask.allTasks.length*/} onclick='userTask.deleteTask(this)'></i>
    <div class='textArea'>${newTask.taskName}</div>
    <div class='dateTime'>${newTask.taskDate}<br/>${newTask.taskTime}</div>
    </div>`
    //integrity check
    console.log(newNote);
    //add the new task to the array of tasks
    userTask.addTask(newNote);
    //print the new note to the screen(add another div to make the effect of flowing)
    myTask.innerHTML+=`<span class='addNewDiv'>${newNote}</span>`;
}
function clearFields(){
    mission.value=null;
    dateMission.value=null;
    timeMission.value=null;
    messageBox.innerHTML=null;
}