import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import './assets/main.css'
import route from '../src/route'

// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//     apiKey: "AIzaSyAVKgw8Lfhfkb1dBzygILqxD9pM9ZhRDhU",
//     authDomain: "my-new-project-b013b.firebaseapp.com",
//     projectId: "my-new-project-b013b",
//     storageBucket: "my-new-project-b013b.appspot.com",
//     messagingSenderId: "203747374443",
//     appId: "1:203747374443:web:d863220449b76cfdc3c82e",
//     measurementId: "G-BN2LPN836T"
//   };

// const app = initializeApp(firebaseConfig);

const app = createApp(App)
app.use(route).mount("#app");
