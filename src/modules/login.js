let formButton = document.getElementById('form__button')
let fields = document.querySelectorAll("#login-form input")
let credentials = {}

fields.forEach(field => {
    field.addEventListener("change", (event) => {
        let property = event.target.name
        let value = event.target.value
        credentials[property] = value
    })
})

formButton.addEventListener("click", () => {
    /*credentials.name && credentials.pass 
    ? (localStorage.setItem("token", JSON.stringify(credentials)), window.open('../index.html', '_self'))
    : alert('Complete Form')*/
    console.log(credentials)
    localStorage.setItem("token", JSON.stringify(credentials))
})
