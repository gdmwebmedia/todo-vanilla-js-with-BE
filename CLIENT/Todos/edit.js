import { toDos } from "../Database/todos.js"
import { addToDo } from "./add.js"
import { renderTodos } from './renderTodos.js'

export function editToDo(e) {
    e.preventDefault()
    let idToEdit = e.target.parentElement.id
    console.log('vrei sa editezi un task cu ID-ul: ', idToEdit)

    const addEditSubmit = document.getElementById('addEditSubmit')
    addEditSubmit.removeEventListener('click', addToDo)
    addEditSubmit.addEventListener('click', updateElement)
    document.querySelector('#addEditForm > h1').textContent = 'Edit To Do'
    addEditSubmit.textContent = 'Edit'

    let elementToEdit = toDos.find(element => element.id == idToEdit);

    let taskName = document.getElementById('addEditTaskName')
    let status = document.getElementById('addEditTaskStatus')
    let responsible = document.getElementById('addEditResponsible')

    taskName.value = elementToEdit.taskName
    status.value = elementToEdit.status
    responsible.value = elementToEdit.responsible

    function updateElement(e) {
        e.preventDefault()
        console.log('ai editat un task cu ID-ul: ', idToEdit)
        addEditSubmit.removeEventListener('click', updateElement)
        addEditSubmit.addEventListener('click', addToDo)

        let indexToUpdate = toDos.indexOf(elementToEdit)
        toDos[indexToUpdate].taskName = taskName.value
        toDos[indexToUpdate].responsible = responsible.value
        toDos[indexToUpdate].status = status.value

        renderTodos()

        taskName.value = ''
        status.value = 'to-do'
        responsible.value = ''
        document.querySelector('#addEditForm > h1').textContent = 'Add To-Do'
        addEditSubmit.textContent = 'Add'
    }
}
