import { getPostById, deleteByid } from "./modules/requestPostsView.js";
import { isLogged } from "./modules/isLogged.js";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const imgDOM = document.querySelector("#img-post"); 
const titleDOM = document.querySelector("#title-post"); 
const dateDOM = document.querySelector("#date-post"); 
const ulDOM = document.querySelector("#tags-list"); 
const detailsDOM = document.querySelector("#details-post");
const addComentSection = document.querySelector('#add-comment');
const btnDelete = document.querySelector('#btn-delete'); 

if (!isLogged()) {
  addComentSection.classList.add('d-none');
  btnDelete.classList.add('d-none');
} else {
  btnDelete.addEventListener('click', async () => {
    await deleteByid(id);
    window.open('../index.html', '_self');
  });
}

const renderPost = async () => {
  let postObject = await getPostById(id);
  console.log(postObject);
  let { image, title, creationDate, tags, content } = postObject;
  let formatDate = moment(creationDate).format('DD/MM/YYYY');
  let timeAgo = moment(creationDate).fromNow();

  imgDOM.src = image;
  titleDOM.textContent = title;
  dateDOM.textContent = `${formatDate} (${timeAgo})`;
  detailsDOM.textContent = content
  //Hashtags DOM
  tags.split(' ').join('').split(',').forEach(tag => {
    let li = document.createElement('li');
    li.textContent = `#${tag}`;
    ulDOM.appendChild(li);
  })
};

renderPost();