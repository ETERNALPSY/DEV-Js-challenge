const createCardPostHome = (imgUrl, postTitle, hashtags, date, id, isLogged) => {
  //Provicional, serán pasados como paramentros
  // let imgUrl = 'https://picsum.photos/200/100';
  let userName = 'Johana Smith';
  // let hashtags = ["#news", "#javascript", "#webdev", "#gatsby"];
  // let postTitle = 'Welcome to ECS9, is better than ECS6'
  // let date = '12/12/2023';
  // let id = 123;

  //CONTENEDOR PRINCIPAL
  let card = document.createElement('div');
  card.classList.add('card', 'shadow', 'mb-2')
  let imgCard = document.createElement('img');
  imgCard.classList.add('card-img-top');
  imgCard.src = imgUrl;
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  //CONTENEDOR 1
  const divC1 = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");
  const h5 = document.createElement("h5");
  const span2C1 = document.createElement("span");

  divC1.classList.add("d-flex", "mb-3", "align-items-center");
  img.classList.add("rounded-circle", "border", "object-fit-cover", "me-3");
  img.setAttribute("src", "https://i.pravatar.cc/");
  img.style.width = "40px";
  span.classList.add("d-flex", "flex-column");
  h5.classList.add("fs-6", "fw-bold");
  h5.textContent = userName; //Rgistrar nombre de usuario que inicio sesión
  span2C1.classList.add("fs-6", "fw-light");
  span2C1.textContent = date.slice(0, 10);

  span.appendChild(h5);
  span.appendChild(span2C1);
  divC1.appendChild(img);
  divC1.appendChild(span);

  //CONTENEDOR 2
  const divC2 = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.classList.add("card-title");

  const a = document.createElement("a");
  a.href = `../views/postView.html?id=${id}}`;
  a.textContent = postTitle;

  h1.appendChild(a);

  const ul = document.createElement("ul");
  ul.classList.add("list-tag__main");

  hashtags.split(' ').join('').split(',').forEach((hashtag) => {
    const li = document.createElement("li");
    li.textContent = `#${hashtag}`;
    ul.appendChild(li);
  });

  divC2.appendChild(h1);
  divC2.appendChild(ul);

  //CONTENEDOR 3
    // Crear elementos HTML
    const divC3 = document.createElement("div");
    const div2 = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");

    divC3.classList.add("d-flex", "justify-content-between", "w-100");
    div2.classList.add("d-flex", "align-items-center");
    img1.setAttribute("src", "../assets/heart-icon.svg");
    img1.setAttribute("alt", "");
    img2.setAttribute("src", "../assets/comment-icon.svg");
    img2.setAttribute("alt", "");
    span1.classList.add("d-flex", "align-items-center", "me-3");
    span1.appendChild(img1);
    span1.appendChild(document.createTextNode("8 Reactions"));
    span2.classList.add("d-flex", "align-items-center");
    span2.appendChild(img2);
    span2.appendChild(document.createTextNode("2 Comments"));
    div2.appendChild(span1);
    div2.appendChild(span2);
    divC3.appendChild(div2);
    const div3 = document.createElement("div");
    const span3 = document.createElement("span");
    const img3 = document.createElement("img");
    img3.setAttribute("src", "../assets/save-icon.svg");
    img3.setAttribute("alt", "");
    span3.classList.add("d-flex", "align-items-center");
    span3.appendChild(document.createTextNode("1 min"));
    span3.appendChild(img3);
    div3.appendChild(span3);
    divC3.appendChild(div3);

    //BTN Delete
    if (isLogged()) {
      let btnDelete = document.createElement('button');
      btnDelete.classList.add('btn', 'btn-danger', 'py-0', 'mx-3');
      btnDelete.setAttribute('id', id);
      btnDelete.textContent = 'Delete';
      btnDelete.addEventListener('click', (e) => {
        console.log(e.target);
      });
      span3.insertBefore(btnDelete, img3);
    }

    //Append to cardBody
    cardBody.append(divC1, divC2, divC3);
    card.append(imgCard, cardBody);
    return card;
}

export { createCardPostHome }; 