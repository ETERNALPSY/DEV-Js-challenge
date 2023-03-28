import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyDu0EnGXVCxhmc-aFtj00fguldfWKI_96A",
    authDomain: "devto-challange.firebaseapp.com",
    databaseURL: "https://devto-challange-default-rtdb.firebaseio.com",
    projectId: "devto-challange",
    storageBucket: "devto-challange.appspot.com",
    messagingSenderId: "524899958907",
    appId: "1:524899958907:web:f0c75131c1aa5d353ee2de",
    measurementId: "G-27LK5MB576"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a root reference
const storage = getStorage(app)

export{storage, ref, uploadBytesResumable, getDownloadURL}