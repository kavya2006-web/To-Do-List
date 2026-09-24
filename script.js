let task=document.querySelector("#task");
let todo=document.querySelector(".todo-input");
let date=document.querySelector(".date-input");
let list=document.querySelector("#list");
let clear=document.querySelector("#clear");
let header=document.querySelector("h1");
let deleteBtn=document.querySelector(".delete-button");
let editButton=document.querySelector(".edit-button");
let editContainer=document.querySelector(".edit-container");
let saveBtn=document.querySelector("#save");
let newTask=document.querySelector("#text-edit");
let newDate=document.querySelector("#date-edit");
header.innerHTML="<i class='fas fa-list'></i> To Do List";
task.addEventListener("click",()=>{
    let taskInput=todo.value;
    let dateInput=date.value;
     if(taskInput==""){
        alert("please enter the task");
    } if(dateInput==""){
        alert("please enter the date");
    }
    let ele=document.createElement("li");
    let dateEle=document.createElement("span");
    let checkBox=document.createElement("input");
    let taskEle=document.createElement("span");
    checkBox.type="checkbox";
    dateEle.textContent=dateInput;
    taskEle.textContent=taskInput;
    ele.prepend(checkBox);
    ele.appendChild(taskEle);
    list.appendChild(ele);
    ele.appendChild(dateEle);
    let editBtn=document.createElement("button");
    editBtn.innerHTML="<i class='fas fa-edit'></i>";
    ele.appendChild(editBtn);
    deleteBtn=document.createElement("button");
    deleteBtn.innerHTML="<i class='fas fa-trash'></i>";
    ele.appendChild(deleteBtn);
    editBtn.classList.add("edit-button");
    deleteBtn.classList.add("delete-button");
    todo.value="";
    date.value="";
   deleteBtn.addEventListener("click",()=>{
    ele.remove();
   });
    
    
    editBtn.addEventListener("click",()=>{
        editContainer.style.visibility="visible";
       
       
       newTask.value=taskEle.textContent; 
        newDate.value=dateEle.textContent;
       
        

       
       });
 
 saveBtn.addEventListener("click",()=>{

         taskEle.textContent=newTask.value;
         dateEle.textContent=newDate.value;

        editContainer.style.visibility="hidden";
        

       });
        

        
     
  
});