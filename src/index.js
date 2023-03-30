//condicional para login y log out
import { filterforLupita,values,sortByDate } from "./modules/filter.js"

let logged = document.querySelectorAll(".login-card")
let logOut = document.querySelectorAll(".logout-card")

const token = () => {
    let getToken = localStorage.getItem("token")
    getToken ? logged.forEach(item => item.classList.add("d-none")) : logOut.forEach(item => item.classList.add("d-none"))
}
values()
filterforLupita()
token()
sortByDate()