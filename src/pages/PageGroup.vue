<template>
  <div class="row">
    <div class="col-12 col-md-6 mb-3">
      <GroupAddItem @add-group="addGroup" />
    </div>
    <div class="col-12 col-md-6 mb-3">
      <div class="border border-warning rounded fs-5 pb-1">
        <span class="badge bg-success">{{
          getTotalSum(groups.filter(item => item.vid === 'debet'))
        }}</span>
        -
        <span class="badge bg-danger">{{
          getTotalSum(groups.filter(item => item.vid === 'credit'))
        }}</span>
        =
        <span class="badge bg-warning">{{
          getTotalSum(groups.filter(item => item.vid === 'debet')) -
          getTotalSum(groups.filter(item => item.vid === 'credit'))
        }}</span>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <GroupList
        :groups="groups.filter(item => item.vid === 'debet')"
        @remove-group-item="removeGroupItem"
        @add-category-item="addCategoryItem"
        @remove-category-item="removeCategoryItem"
      />
    </div>
    <div class="col-12 col-md-6">
      <GroupList
        :groups="groups.filter(item => item.vid === 'credit')"
        @remove-group-item="removeGroupItem"
        @add-category-item="addCategoryItem"
        @remove-category-item="removeCategoryItem"
      />
    </div>
  </div>
</template>

<script>
import ClassGroup from './../classes/ClassGroup'
import getTotalSum from './../scripts/getTotalSum'

import GroupAddItem from './../components/GroupAddItem.vue'
import GroupList from './../components/GroupList.vue'

export default {
  components: {
    GroupAddItem,
    GroupList
  },
  data() {
    return {
      //groups: JSON.parse(localStorage.getItem('mm-groups') || '[]')
    }
  },
  computed: {
    groups() {
      return this.$store.getters.groups
    }
  },
  methods: {
    getTotalSum,
    addGroup({ vid, title }) {
      const group = Object.assign({}, new ClassGroup(vid, title))

      this.$store.dispatch('addItem', { item: group })
      //this.groups.push(group)
      //localStorage.setItem('mm-groups', JSON.stringify(this.groups))
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

    saveItem() {}

    // saveItem() {

    //   if (this.modalItem.vid === 'debet' || this.modalItem.vid === 'credit') {
    //     const index = this.groups.findIndex(
    //       item => item.id === this.modalItem.id
    //     )
    //     this.groups[index] = this.modalItem
    //   } else if (this.modalItem.vid === 'category') {
    //     const indexGroup = this.groups.findIndex(
    //       item => item.id === this.modalItem.groupId
    //     )

    //     const indexCategory = this.groups[indexGroup].categories.findIndex(
    //       item => item.id === this.modalItem.id
    //     )

    //     this.groups[indexGroup].categories[indexCategory] = this.modalItem

    //     const groupSum = getTotalSum(this.groups[indexGroup].categories)
    //     this.groups[indexGroup].sum = groupSum
    //   }
    //   localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    // }
  }
}
</script>