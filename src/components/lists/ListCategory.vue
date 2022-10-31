<template>
  <div class="row">
    <div class="col-12">
      <div class="list-group">
        <button
          v-for="category in filterCategories"
          :key="category.id"
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="$emit('set-category-id', { categoryId: category.id })"
        >
          {{ category.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupId: String
  },
  emits: ['set-category-id'],
  computed: {
    categories() {
      return this.$store.getters.categories
    },
    filterCategories() {
      return this.categories.filter(item => item.groupId === this.groupId)
    }
  }
}
</script>