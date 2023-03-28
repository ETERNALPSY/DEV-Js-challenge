/*const progressBar = (progress,id) => {
    let divProgress = document.createElement("div")
    divProgress.classList.add("progress")
    divProgress.setAttribute("id",`div-${id}`)

    let divBar = document.createElement("div")
    divBar.classList.add("progress-bar")
    divBar.setAttribute("role","progressbar")
    divBar.setAttribute("aria-label","Basic example")
    divBar.setAttribute("style",`width: ${progress}%`)
    divBar.setAttribute("aria-valuenow",`${progress}`)
    divBar.setAttribute("aria-valuemin","0")
    divBar.setAttribute("aria-valuemax","100")

    divProgress.appendChild(divBar)

    return divProgress
}*/

const progressBar = (progress) => {
    let divBar = document.createElement("div")
    divBar.classList.add("progress-bar")
    divBar.setAttribute("role","progressbar")
    divBar.setAttribute("aria-label","Basic example")
    divBar.setAttribute("style",`width: ${progress}%`)
    divBar.setAttribute("aria-valuenow",`${progress}`)
    divBar.setAttribute("aria-valuemin","0")
    divBar.setAttribute("aria-valuemax","100")

    return divBar
}

export{ progressBar }