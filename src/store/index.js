import { createStore } from 'vuex'
import user from './modules/user'
import items from './modules/items'

export default createStore({
  modules: {
    user,
    items
  }
})