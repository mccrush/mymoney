import fireApp from './../../firebase'
import { getFirestore, doc, setDoc, updateDoc, deleteDoc, collection, query, getDocs } from "firebase/firestore"
const db = getFirestore(fireApp)

export default {
  state: {
    groups: []
  },
  mutations: {
    addGroup(state, { group }) {
      state.groups.push(group)
    }
  },
  actions: {
    async addGroup({ commit }, { group }) {
      try {
        console.log('Comin group:', group);
        //commit('updateLoadingStatus', true)
        commit('addGroup', { group })
        await setDoc(doc(db, group.type, group.id), group)
        //commit('updateLoadingStatus', false)
        console.log('groups.js: addGroup(): Данные добавлены')
      } catch (error) {
        console.error('groups.js: addGroup(): error', error)
      }
    },
  },
  getters: {
    groups: state => state.groups
  }
}