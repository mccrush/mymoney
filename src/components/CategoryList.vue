<template>
  <ul class="list-group mb-1">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @remove-category-item="removeCategoryItem"
      @show-modal="showModal"
    />
  </ul>
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
  components: {
    CategoryItem
  },
  props: {
    categories: Array
  },
  emits: ['remove-category-item', 'show-modal'],
  methods: {
    removeCategoryItem({ groupId, categoryId }) {
      this.$emit('remove-category-item', { groupId, categoryId })
    },

    showModal({ item }) {
      this.$emit('show-modal', { item })
    }
  }
}
</script>