<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating mb-2">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputGroupTitle"
          placeholder="Название группы"
          v-model.trim="item.title"
          @blur="saveItem"
        />
        <label for="inputGroupTitle">Название группы</label>
      </div>

      <div class="form-floating">
        <select
          class="form-select"
          id="inputGroupType"
          aria-label="Выбор типа группы"
          v-model="item.type"
          @change="saveItem"
        >
          <option value="debet">Доход</option>
          <option value="credit">Расход</option>
        </select>
        <label for="inputGroupType">Тип группы</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  emits: ['save-item'],
  methods: {
    saveItem() {
      this.$emit('save-item')
    }
  }
}
</script>