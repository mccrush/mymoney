<template>
  <div class="input-group">
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
      v-model="vid"
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
      vid: 'debet'
    }
  },
  methods: {
    addGroupItem() {
      if (this.title) {
        this.$emit('add-group', { vid: this.vid, title: this.title })
        this.title = ''
      }
    }
  }
}
</script>