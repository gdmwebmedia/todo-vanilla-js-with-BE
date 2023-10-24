import { users } from '../Database/users.js'

export function login(e) {
    e.preventDefault()
    const loginEmail = document.getElementById("loginEmail")
    const loginPassword = document.getElementById("loginPassword")
    console.log(`vrei sa te autentifici cu ${loginEmail.value} si ${loginPassword.value}`)

    const user = users.filter(function(user) {
        return user.email === loginEmail.value;
      });

    if (user[0]) {
        console.log('utilizator gasit: ', user[0])
        if (user[0].password === loginPassword.value) {
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('username', user[0].name)
            document.getElementById('login').setAttribute('hidden', 'true')
            document.getElementById('register').setAttribute('hidden', 'true')
            document.getElementById('user').removeAttribute('hidden')
            document.getElementById('greetings').textContent = 'Salut ' + user[0].name

            let taskButtons = document.querySelectorAll('.taskButtons')
            taskButtons.forEach(element => {
                element.style.display = 'block'
            });
        }
    } else
    {
        console.log('utilizatorul nu exista')
    }
}