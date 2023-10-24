let url = "http://localhost:3000/"

export function register(e) {
    console.log('vrei sa te inregistrezi')
    e.preventDefault()

    let user = {}

    user.email = document.getElementById('registerEmail').value
    user.name = document.getElementById('registerUsername').value
    user.password = document.getElementById('registerPassword').value

    console.log('trying to send data to server app ', user)
    fetch(url + 'register', {
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
        .then(res => res.text()
        .then(res => console.log(res))
        )

}