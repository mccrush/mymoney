import { createStore } from 'vuex'
import user from './modules/user'
import groups from './modules/groups'
import items from './modules/items'

export default createStore({
  modules: {
    user,
    groups,
    items
  }
})