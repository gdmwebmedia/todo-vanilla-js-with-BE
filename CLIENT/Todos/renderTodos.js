import { toDos } from '../Database/todos.js'
import { deleteToDo } from './delete.js'
import { editToDo } from './edit.js'

export function renderTodos() {
    document.getElementById('toDos').innerHTML = "<h1>My To-Dos</h1>"
    toDos.forEach((todo)=> {
        const todoDiv = document.createElement('div')
        todoDiv.id = todo.id
        todoDiv.classList.add('toDo')
        const todoTask = document.createElement ('div')
        todoTask.textContent = todo.taskName
        todoTask.classList.add('taskName')
        todoDiv.appendChild(todoTask)

        const todoReaponsible = document.createElement ('div')
        todoReaponsible.textContent = todo.responsible
        todoReaponsible.classList.add('taskResponsible')
        todoDiv.appendChild(todoReaponsible)
    
        const todoStatus = document.createElement ('div')
        todoStatus.textContent = todo.status
        todoStatus.classList.add('taskStatus')
        todoDiv.appendChild(todoStatus)

        const todoDeleteButton = document.createElement('button')
        todoDeleteButton.textContent = "DELETE"
        todoDeleteButton.classList.add('taskButtons')
        todoDeleteButton.addEventListener('click', deleteToDo)
        todoDiv.appendChild(todoDeleteButton)

        const todoEditButton = document.createElement('button')
        todoEditButton.textContent = "EDIT"
        todoEditButton.classList.add('taskButtons')
        todoEditButton.addEventListener('click', editToDo)
        todoDiv.appendChild(todoEditButton)
    
        const todoList = document.getElementById('toDos')
        todoList.appendChild(todoDiv)

        const isLoggedIn = localStorage.getItem("isLoggedIn")

        if (isLoggedIn) {
            let taskButtons = document.querySelectorAll('.taskButtons')
            taskButtons.forEach(element => {
                element.style.display = 'block'
            });
        }
    
    })
}