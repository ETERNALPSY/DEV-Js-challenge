import { createCardPostHome } from "./modules/createCards.js";
import { isLogged } from "./modules/isLogged.js";

const postsDom = document.getElementById('posts-home');

postsDom.appendChild( createCardPostHome(isLogged) );
console.log(isLogged());