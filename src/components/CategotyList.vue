<template>
  <ul class="list-group">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </ul>
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
  components: {
    CategoryItem
  },
  computed: {
    categories() {
      return JSON.parse(localStorage.getItem('mm-categories') || '[]')
    }
  }
}
</script>