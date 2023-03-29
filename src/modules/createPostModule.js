const createPost = async (koderObject) => {
    let response = await fetch(
        `https://devto-challange-default-rtdb.firebaseio.com/.json`, {
        method: "POST",
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    return data
}

const getElement = async () => {
    let response = await fetch("https://devto-challange-default-rtdb.firebaseio.com/.json" );
    let data = await response.json();
    return data;
}

export{ createPost, getElement}