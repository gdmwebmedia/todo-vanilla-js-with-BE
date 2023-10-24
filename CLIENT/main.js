import { register } from './Users/register.js'
import { login } from './Users/login.js'
import { logout } from './Users/logout.js'
import { renderTodos } from './Todos/renderTodos.js'
import { addToDo } from './Todos/add.js'

const loginButton = document.getElementById("loginSubmit")
loginButton.addEventListener('click', login)

const registerButton = document.getElementById("registerSubmit")
registerButton.addEventListener('click', register)

const isLoggedIn = localStorage.getItem("isLoggedIn")

if (isLoggedIn) {
    document.getElementById('login').setAttribute('hidden', 'true')
    document.getElementById('register').setAttribute('hidden', 'true')
    document.getElementById('user').removeAttribute('hidden')
    document.getElementById('greetings').textContent = 'Salut ' + localStorage.getItem('username')
}

renderTodos()

const logoutButton = document.getElementById("logout")
logoutButton.addEventListener('click', logout)


const addEditSubmit = document.getElementById("addEditSubmit")
addEditSubmit.addEventListener('click', addToDo)
