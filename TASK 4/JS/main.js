/* let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')

let todos = []

button.addEventListener('click',()=>{
    todos.push(input.value)
    console.log(todos)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
   let para = document.createElement('p')
   para.innerText = todo
   todoList.appendChild(para)

   para.addEventListener('click',()=>{
    para.style.textDecoration = 'line-through'
    remove(todo)
   })
   para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
   })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1)
    todos.splice(index,1)
} */


let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')
//local storage
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
    console.log(todos)
}
button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
   let para = document.createElement('p')
   para.innerText = todo
   todoList.appendChild(para)
   
   para.addEventListener('click',()=>{
    para.style.textDecoration = 'line-through'
    remove(todo)
   })
   para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
   })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1){
    todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}