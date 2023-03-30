import { getPostById, deleteByid } from "./modules/requestPostsView.js";
import { isLogged } from "./modules/isLogged.js";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const imgDOM = document.querySelector("#img-post"); 
const titleDOM = document.querySelector("#title-post"); 
const nameDOM = document.querySelector("#user-name"); 
const dateDOM = document.querySelector("#date-post"); 
const ulDOM = document.querySelector("#tags-list"); 
const detailsDOM = document.querySelector("#details-post");
const addComentSection = document.querySelector('#add-comment');
const btnDelete = document.querySelector('#btn-delete'); 
const navLogged = document.querySelector('#nav-logged');
const navNoLogged = document.querySelector('#nav-no-logged');

if (!isLogged()) {
  addComentSection.classList.add('d-none');
  btnDelete.classList.add('d-none');
} else {
  navLogged.classList.remove('d-none');
  navNoLogged.classList.add('d-none');
  btnDelete.addEventListener('click', async () => {
    await deleteByid(id);
    window.open('../index.html', '_self');
  });
}

const renderPost = async () => {
  let postObject = await getPostById(id);
  let { image, title, userName, creationDate, tags, content } = postObject;
  let formatDate = moment(creationDate).format('DD/MM/YYYY');
  let timeAgo = moment(creationDate).fromNow();

  imgDOM.src = image;
  titleDOM.textContent = title;
  nameDOM.textContent = userName;
  dateDOM.textContent = `${formatDate} (${timeAgo})`;
  detailsDOM.textContent = content
  //Hashtags DOM
  tags.split(/[,\s]+/).forEach(tag => {
    let li = document.createElement('li');
    li.textContent = `#${tag}`;
    ulDOM.appendChild(li);
  })
};

renderPost();