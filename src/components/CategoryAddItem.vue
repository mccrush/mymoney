<template>
  <div class="input-group input-group-sm mt-2 mb-2">
    <input
      type="text"
      class="form-control"
      placeholder="Название категории"
      aria-label="Название категории"
      aria-describedby="addCategory"
      v-model.trim="title"
    />
    <!-- <select
      class="form-select"
      id="inputCategoryType"
      aria-label="Выбор типа категории"
      v-model="type"
    >
      <option value="debet">Доход</option>
      <option value="credit">Расход</option>
    </select> -->
    <button
      class="btn btn-outline-secondary"
      type="button"
      id="addCategory"
      @click="addCategoryItem"
    >
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  emits: ['add-category'],
  data() {
    return {
      title: '',
      type: 'debet'
    }
  },
  methods: {
    addCategoryItem() {
      if (this.title) {
        this.$emit('add-category', { title: this.title })
        this.title = ''
      }
    }
  }
}
</script>