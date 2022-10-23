<template>
  <ul>
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </ul>
</template>

<script>
export default {
  computed: {
    categories() {
      return JSON.parse(localStorage.getItem('mm-categories') || '[]')
    }
  }
}
</script>