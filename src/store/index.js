import { createStore } from 'vuex'
import groups from './modules/groups'
import items from './modules/items'

export default createStore({
  modules: {
    groups,
    items
  }
})