export function logout() {
    localStorage.clear()
    document.getElementById('login').removeAttribute('hidden')
    document.getElementById('register').removeAttribute('hidden')
    document.getElementById('user').setAttribute('hidden', true)

    let taskButtons = document.querySelectorAll('.taskButtons')
            taskButtons.forEach(element => {
                element.style.display = 'none'
            });

}