<template>
  <ul class="list-group mb-1">
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
  props: {
    categories: Array
  }
}
</script>