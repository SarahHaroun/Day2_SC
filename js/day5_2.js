var TaskList = [];

    document.querySelector("#addTaskBtn").addEventListener("click", function () {
        var obj={};
        var Task = document.querySelector("#Task");
        obj.name=Task.value;
        obj.status="wait";
        TaskList.push(obj);
        showTask();
    });


function showTask(){
    var ul = document.createElement("ul");
    var div = document.querySelector("#taskList");
    div.innerHTML = "";    
    TaskList.forEach(function(element ,index){
        var li = document.createElement("li");
        li.innerText=element.name;
        li.innerHTML += '<input type="button" value="✖" onclick="del('+index+')" style="background-color: Coral; margin-left: 50px;" >'
        li.innerHTML += '<input type="button" value="✔" onclick="done('+index+')" style="background-color: LightGreen; ">'

        if(element.status=="done"){
            li.style.backgroundColor = "lightblue"; 
            li.style.padding = "10px"; 
            li.style.margin = "5px "; 
        }
        ul.appendChild(li);
        //console.log(element)
    });
    div.appendChild(ul);
}

//delete the task 
function del(index){
    console.log("del" , index);
    TaskList.splice(index,1);       //clear the task from the array of tasks
    showTask();
    console.log(TaskList);

}
// excute the change on background when the task completed
function done(index){
    console.log("done" , index);
    TaskList[index].status = "done";
    showTask();
}

// add task when enter at enter button at keyboard
Task.addEventListener("keyup" , function(e){
    if(e.keyCode == 13){
        var obj={};
        var Task = document.querySelector("#Task");
        obj.name=Task.value;
        obj.status="wait";
        TaskList.push(obj);
        
        showTask();
    }
    
})

