import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from './store'

import fireApp from './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(fireApp)



let app

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App).use(store).mount('#app')
  }

  if (user) {
    console.log('main.js : Пользователь авторизован')
  } else {
    console.log('main.js: Пользователь не авторизован. user = ', user)
  }

})
