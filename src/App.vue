

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <GroupAddItem @add-group="addGroup" />
      </div>
      <div class="col-6"></div>
      <div class="col-6">
        <GroupList
          :groups="groups.filter(item => item.type === 'debet')"
          @remove-group-item="removeGroupItem"
          @add-category-item="addCategoryItem"
          @remove-category-item="removeCategoryItem"
          @show-modal="showModal"
        />
      </div>
      <div class="col-6">
        <GroupList
          :groups="groups.filter(item => item.type === 'credit')"
          @remove-group-item="removeGroupItem"
          @add-category-item="addCategoryItem"
          @remove-category-item="removeCategoryItem"
          @show-modal="showModal"
        />
      </div>
    </div>
    <ModalMain
      id="modal"
      :item="modalItem"
      :groups="groups"
      @save-item="saveItem"
    />
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

    removeCategoryItem({ groupId, categoryId }) {
      const index = this.groups.findIndex(item => item.id === groupId)
      const arrayCategories = this.groups[index].categories.filter(
        item => item.id !== categoryId
      )
      this.groups[index].categories = arrayCategories
      localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    },

    showModal({ item }) {
      this.modalItem = item
      const modal = new Modal(document.getElementById('modal'))
      modal.show()
    },

    saveItem() {
      if (this.modalItem.type === 'debet' || this.modalItem.type === 'credit') {
        const index = this.groups.findIndex(
          item => item.id === this.modalItem.id
        )
        this.groups[index] = this.modalItem
      } else if (this.modalItem.type === 'category') {
        const indexGroup = this.groups.findIndex(
          item => item.id === this.modalItem.groupId
        )

        const indexCategory = this.groups[indexGroup].categories.findIndex(
          item => item.id === this.modalItem.id
        )

        this.groups[indexGroup].categories[indexCategory] = this.modalItem
      }
      localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    }
  }
}
</script>


<style scoped>
</style>
