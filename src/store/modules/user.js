import fireApp from './../../firebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
const auth = getAuth(fireApp)
const db = getFirestore(fireApp)

export default {
  state: {
    userId: null,
    userData: null
  },
  mutations: {
    setUserId(state, value) {
      state.userId = value
    },
    setUserData(state, value) {
      state.userData = value
    }
  },
  actions: {
    async getUserData({ commit }, id) {
      try {
        const docRef = doc(db, 'user', id)
        const user = await getDoc(docRef)
        commit('setUserData', user.data())
      } catch (err) {
        console.error('user.js getUserData(): Ошибка при получении данных пользователя, err:', err)
        throw err
      }
    },
    async logIn({ commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (err) {
        console.error('user.js logIn(): Ошибка при входе в систему, err:', err)
        throw err
      }
    },
    async logOut({ commit }) {
      try {
        await signOut(auth)
      } catch (err) {
        console.error('user.js logOut(): Ошибка при выходе из системы, err:', err)
      }
    }
  },
  getters: {
    userId: state => state.userId,
    userData: state => state.userData
  }
}