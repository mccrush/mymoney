import fireApp from './../../firebase'
import { getFirestore, doc, setDoc, updateDoc, deleteDoc, collection, query, getDocs } from "firebase/firestore"
const db = getFirestore(fireApp)

export default {
  state: {
    items: []
  },
  mutations: {},
  actions: {
    async addItem({ commit }, { item }) {
      try {
        commit('updateLoadingStatus', true)
        commit('addItem', { item })
        await setDoc(doc(db, item.type, item.id), item)
        commit('updateLoadingStatus', false)
        console.log('admin.js: addItem(): Данные добавлены')
      } catch (error) {
        console.error('admin.js: addItem(): error', error)
      }
    },
  },
  getters: {
    items: state => state.items
  }
}