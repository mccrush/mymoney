<template>
  <ul class="list-group">
    <GroupItem
      v-for="group in groups"
      :key="group.id"
      :group="group"
      @remove-group-item="removeGroupItem"
      @add-category-item="addCategoryItem"
      @remove-category-item="removeCategoryItem"
      @show-modal="showModal"
    />
  </ul>
</template>

<script>
import GroupItem from './GroupItem.vue'

export default {
  components: {
    GroupItem
  },
  props: {
    groups: Array
  },
  emits: [
    'remove-group-item',
    'add-category-item',
    'remove-category-item',
    'show-modal'
  ],
  methods: {
    removeGroupItem({ id }) {
      this.$emit('remove-group-item', { id })
    },

    addCategoryItem({ category }) {
      this.$emit('add-category-item', { category })
    },

    removeCategoryItem({ groupId, categoryId }) {
      this.$emit('remove-category-item', { groupId, categoryId })
    },

    showModal({ item }) {
      this.$emit('show-modal', { item })
    }
  }
}
</script>