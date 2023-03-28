let previewDOM = (imagenSrc,titulo,tags,content) => {
    let divContainer = document.createElement("div")
    divContainer.classList.add("card","border","p-3")
    //divContainer.setAttribute("style","height: 5rem;")

    let image = document.createElement("img")
    imagenSrc!== undefined ? image.setAttribute("src",imagenSrc) : image.setAttribute("src","") 
    image.classList.add("card-img-top")

    let divBody = document.createElement("div")
    divBody.classList.add("card-body")

    let title = document.createElement("h1")
    title.classList.add("card-title")
    titulo !== undefined? title.innerText = titulo : title.innerText=""

    let parrafoTags = document.createElement("p")
    parrafoTags.classList.add("card-text")
    tags!==undefined?parrafoTags.innerText = tags : parrafoTags.innerText = "" 

    let parrafoContent = document.createElement("p")
    parrafoContent.classList.add("card-text")
    content!==undefined?parrafoContent.innerText = content : parrafoContent.innerText = ""

    divBody.append(title, parrafoTags, parrafoContent)
    divContainer.append(image,divBody)

    return divContainer
}

export{ previewDOM }