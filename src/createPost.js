import { progressBar } from "./modules/progressBarModule.js"
import { createPost } from "./modules/createPostModule.js";
import {storage, ref, uploadBytesResumable, getDownloadURL} from "./modules/firebase.js"
import { previewDOM } from "./modules/previewDOMModule.js";

let fields = document.querySelectorAll("#post-form input")

let data = {}

fields.forEach((field) => {
    field.addEventListener("keyup", (event) => {
        let property = event.target.name
        let value = event.target.value
        data = { ...data, [property]: value }
        console.log(data)
    })
})

let textarea = document.querySelector("#post-form textarea")

textarea.addEventListener("keyup", (event) => {
    let value = event.target.value
    data = { ...data, ["content"]: value }
    console.log(data)
})


let btnImage = document.querySelector("#button-image")
let fichero = document.querySelector("#getFile")
let divImage = document.querySelector("#subir-imagen")

btnImage.addEventListener("click", () => {
    fichero.click()

    fichero.addEventListener("change", (e) => {
        let imagenSubir = fichero.files[0]

        const storageRef = ref(storage, 'imagenes/' + imagenSubir.name);

        const uploadTask = uploadBytesResumable(storageRef, imagenSubir);
        let idCon=1

        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                divImage.appendChild(progressBar(Math.round(progress)))
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                alert("Hubo un error al subir la imágen")
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    data["image"] = downloadURL
                });
            }
        );
    }, false)
})

let btnSendForm = document.querySelector("#btn-send")

btnSendForm.addEventListener("click",async()=>{
    let { title } = data
    data["creationDate"] = new Date()

    if(title) {
        await createPost(data)
        window.open("../index.html","_self")
     } else{
        alert("title: can't be blank")
     }
})

let btnModal = document.querySelector("#modal-leave")

btnModal.addEventListener('click',()=>{
    window.open("../index.html","_self")
})

//Opciones de editar y preview

let anchorEdit = document.querySelector("#a-edit")
let anchorPreview = document.querySelector("#a-preview")
let divPreviewContent = document.querySelector("#preview-content")

document.getElementById("preview").style.display = "none"

anchorEdit.addEventListener("click",()=>{
    document.getElementById("edit").style.display = "block"
    document.getElementById("preview").style.display = "none"
})

anchorPreview.addEventListener("click",()=>{
    document.getElementById("preview").style.display = "block"
    document.getElementById("edit").style.display = "none"

    let previewContent = document.querySelector("#preview-content")
    previewContent.innerHTML = ""

    let {image, title, tags, content} = data
    previewContent.appendChild(previewDOM(image,title,tags,content))
})