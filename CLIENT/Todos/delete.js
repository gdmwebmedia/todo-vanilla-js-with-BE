import { toDos } from '../Database/todos.js'

export function deleteToDo(e) {
    e.preventDefault()
    let idToDelete = e.target.parentElement.id
    console.log('vrei sa stergi un task cu ID-ul: ', idToDelete)

    const todoToDelete = document.getElementById(idToDelete)

    console.log(todoToDelete)
    todoToDelete.outerHTML = ''

    // toDos = [...toDos.filter(todo => todo.id != idToDelete)]
    
    const elementToRemove = toDos.find(element => element.id == idToDelete);
    toDos.splice(toDos.indexOf(elementToRemove), 1);

    console.log('Lista de to-dos dupa stergere: ', toDos)
}