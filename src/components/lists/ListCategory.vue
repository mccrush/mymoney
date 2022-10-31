<template>
  <div class="row">
    <div class="col-12">
      <div class="list-category">
        <button
          v-for="category in categories"
          :key="category.id"
          class="list-category-item list-category-item-action"
          aria-current="true"
        >
          {{ category.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories
    }
  }
}
</script>