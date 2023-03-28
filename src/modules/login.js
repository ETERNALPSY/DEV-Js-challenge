let formButton = document.getElementById('form__button')
let fields = document.querySelectorAll("#login-form .form-control")
let credentials = {}

fields.forEach(field => {
    field.addEventListener("change", (event) => {
        let property = event.target.name
        let value = event.target.value
        credentials[property] = value
    })
})

formButton.addEventListener("click", () => {
    credentials.email && credentials.password 
    ? (localStorage.setItem("token", JSON.stringify(credentials)), window.open('../index.html', '_self'))
    :  fields.forEach(field => {
        field.value ? null : field.classList.add("is-invalid")
    })
})

fields.forEach(field => {
    field.addEventListener("keyup", () =>{
        field.classList.remove("is-invalid")
    })
})