import { globalRequestParams, baseURL } from "../Utils/requests.js"

export default function getTodos() {

    let requestOptions = {...globalRequestParams}
    requestOptions.headers.Authorization = localStorage.getItem('authToken')

    console.log('trying to get Todos')

    fetch(baseURL + 'private', requestOptions)
    .then(res => res.json())
    .then(res => {
        if (res.error) {
            console.log(res.error)
        } else {
            console.log(res)
        }
    })
}