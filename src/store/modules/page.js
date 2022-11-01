export default {
  state: {
    page: 'add'
  },
  mutations: {
    setPage(state, { page }) {
      state.page = page
    }
  },
  getters: {
    page: state => state.page
  }
}