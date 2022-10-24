

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <GroupAddItem @add-group="addGroup" />
        <GroupList
          :groups="groups"
          @remove-group-item="removeGroupItem"
          @add-category-item="addCategoryItem"
          @show-modal="showModal"
        />
      </div>
    </div>
    <ModalMain id="modal" :item="modalItem" />
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import ClassGroup from './classes/ClassGroup'

import GroupAddItem from './components/GroupAddItem.vue'
import GroupList from './components/GroupList.vue'
import ModalMain from './components/modal/ModalMain.vue'

export default {
  components: {
    GroupAddItem,
    GroupList,
    ModalMain
  },
  data() {
    return {
      groups: JSON.parse(localStorage.getItem('mm-groups') || '[]'),
      modalItem: null
    }
  },
  methods: {
    addGroup({ type, title }) {
      const group = Object.assign({}, new ClassGroup(type, title))
      this.groups.push(group)
      localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    },

    removeGroupItem({ id }) {
      this.groups = this.groups.filter(item => item.id !== id)
      localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    },

    addCategoryItem({ category }) {
      const index = this.groups.findIndex(item => item.id === category.groupId)

      this.groups[index].categories.push(category)
      localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    },

    showModal({ item }) {
      this.modalItem = item
      const modal = new Modal(document.getElementById('modal'))
      modal.show()
    }
  }
}
</script>


<style scoped>
</style>
