let todoInput = document.querySelector('#todo-input');
let addbtn = document.querySelector('#add-btn');
let todoList = document.querySelector('.todo-list');

// add the input value in the ul 
addbtn.addEventListener('click', addnewTodo);

//Add new todo
function addnewTodo(){
    if (todoInput.value != ""){
        todoList.innerHTML += `<li class="todo-item"  onclick="selectTodo(this)"  oncontextmenu="deleteList(this)">
                              <span>${todoInput.value}</span>
                                   <button class="delete-btn"  onclick="deleteTodo(this)">Delete</button>
                                    </li>`
         todoInput.value = "";
         }
}
// add new todo on click to the enter key
todoInput.addEventListener('keyup',function(event){
   if (event.key == 'Enter'){
    addnewTodo();
   }
});

//Toggle the list item on click to list 
function selectTodo(list){
   list.classList.toggle('donetodo');

}

// delete the todolist onclick to the delete btn
function deleteTodo(btn){
    btn.parentNode.remove();
   
}

// delete the todoList  using right click
function deleteList(list){
    
    list.remove();
}






