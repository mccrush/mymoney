<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating mb-2">
        <input
          type="date"
          class="form-control form-control-sm"
          id="inputItemDateCreate"
          placeholder="Дата"
          v-model.trim="date"
          @blur="saveItem"
        />
        <label for="inputItemDateCreate">Дата</label>
      </div>

      <div class="form-floating mb-2">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputItemTitle"
          placeholder="Название"
          v-model.trim="title"
          @blur="saveItem"
        />
        <label for="inputItemTitle">Название</label>
      </div>

      <div class="form-floating">
        <select
          class="form-select"
          id="inputGroupType"
          aria-label="Выбор типа группы"
          v-model="type"
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
  data() {
    return {
      date: '',
      title: '',
      type: ''
    }
  },
  methods: {
    saveItem() {
      //this.$emit('save-item')
    }
  }
}
</script>