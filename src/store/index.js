import { createStore } from 'vuex'
import user from './modules/user'
import items from './modules/items'
import page from './modules/page'

export default createStore({
  modules: {
    user,
    items,
    page
  }
})