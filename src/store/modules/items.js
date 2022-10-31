import fireApp from './../../firebase'
import { getFirestore, doc, setDoc, updateDoc, deleteDoc, collection, query, getDocs } from "firebase/firestore"
const db = getFirestore(fireApp)

export default {
  state: {
    groups: [],
    categories: [],
    items: []
  },
  mutations: {
    setItems(state, { type, items }) {
      state[type] = items
    },
    addItem(state, { item }) {
      state[item.type].push(item)
    },
  },
  actions: {
    async getItems({ commit }, { type }) {
      //commit('updateLoadingStatus', true)
      let tempArray = []
      const q = query(collection(db, type))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        tempArray.push(doc.data())
      })
      commit('setItems', { type, items: tempArray })
      //commit('updateLoadingStatus', false)
    },

    async addItem({ commit }, { item }) {
      try {
        //commit('updateLoadingStatus', true)
        commit('addItem', { item })
        await setDoc(doc(db, item.type, item.id), item)
        //commit('updateLoadingStatus', false)
        console.log('admin.js: addItem(): Данные добавлены')
      } catch (error) {
        console.error('admin.js: addItem(): error', error)
      }
    },
  },
  getters: {
    groups: state => state.groups,
    categories: state => state.categories,
    items: state => state.items
  }
}