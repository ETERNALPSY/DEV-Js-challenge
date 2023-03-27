import { createCardPostHome } from "./modules/createCards.js";
import { isLogged } from "./modules/isLogged.js";

const postsDom = document.getElementById('posts-home');

postsDom.appendChild( createCardPostHome(isLogged) );
console.log(isLogged());


//condicional para login y log out
let logged = document.querySelectorAll(".login-card")
let logOut = document.querySelectorAll(".logout-card")

const token = () => {
    let getToken = localStorage.getItem("token")
    getToken ? logged.forEach(item => item.classList.add("d-none")) : logOut.forEach(item => item.classList.add("d-none"))
}

token()