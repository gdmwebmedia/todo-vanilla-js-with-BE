import getTodos from '../Todos/getTodos.js'

let url = "http://localhost:3000/"

export function login(e) {
    e.preventDefault()

    let user = {}

    user.email = document.getElementById('loginEmail').value
    user.password = document.getElementById('loginPassword').value

    console.log('trying to login with ', user)
    fetch(url + 'login', {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(user) //data format must be the same as in header
        })
        .then(res => res.json()
        .then(res => {
            if (res.error) {
                console.log(res.error)
            } else {
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('authToken', res.token)
                console.log('Suceessfully authenticated')
                
                document.getElementById('login').setAttribute('hidden', 'true')
                document.getElementById('register').setAttribute('hidden', 'true')
                document.getElementById('user').removeAttribute('hidden')
                document.getElementById('greetings').textContent = 'Salut ' + res.name

                let taskButtons = document.querySelectorAll('.taskButtons')
                taskButtons.forEach(element => {
                    element.style.display = 'block'
                });

                getTodos()
            }
        })
        )
}