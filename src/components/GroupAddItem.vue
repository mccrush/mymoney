<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Название группы"
      aria-label="Название группы"
      aria-describedby="addGroup"
      v-model.trim="title"
      @keyup.enter="addGroupItem"
    />
    <select
      class="form-select"
      id="inputGroupType"
      aria-label="Выбор типа группы"
      v-model="type"
    >
      <option value="debet">Доход</option>
      <option value="credit">Расход</option>
    </select>
    <button
      class="btn btn-outline-secondary"
      type="button"
      id="addGroup"
      @click="addGroupItem"
    >
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  emits: ['add-group'],
  data() {
    return {
      title: '',
      type: 'debet'
    }
  },
  methods: {
    addGroupItem() {
      if (this.title) {
        this.$emit('add-group', { type: this.type, title: this.title })
        this.title = ''
      }
    }
  }
}
</script>