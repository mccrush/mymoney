<template>
  <ul class="list-group mb-1">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
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
  emits: ['show-modal'],
  methods: {
    showModal({ item }) {
      this.$emit('show-modal', { item })
    }
  }
}
</script>