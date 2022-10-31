

<template>
  <div>
    <NavBar />
    <OffCanvas />

    <div class="container-fluid">
      <transition name="fade" mode="out-in" appear>
        <component :is="CurrentPage" />
      </transition>
    </div>

    <ModalMain id="modal" :item="modalItem" />
  </div>
</template>

<script>
import routes from './data/routes'
import 'bootstrap/js/dist/offcanvas'
import Modal from 'bootstrap/js/dist/modal'

import NavBar from './components/interface/NavBar.vue'
import OffCanvas from './components/interface/OffCanvas.vue'
import PageGroup from './pages/PageGroup.vue'
import PageAdd from './pages/PageAdd.vue'
import PageLogin from './pages/PageLogin.vue'
import Page404 from './pages/Page404.vue'

import ModalMain from './components/modal/ModalMain.vue'

export default {
  components: {
    NavBar,
    OffCanvas,
    PageGroup,
    PageAdd,
    PageLogin,
    Page404,
    ModalMain
  },
  data() {
    return {
      routes,
      currentRoute: window.location.pathname,
      modalItem: null
    }
  },
  computed: {
    CurrentPage() {
      return this.routes[this.currentRoute].page || Page404
    }
  },
  methods: {
    showModal({ item }) {
      this.modalItem = item
      const modal = new Modal(document.getElementById('modal'))
      modal.show()
    }
  }
}
</script>