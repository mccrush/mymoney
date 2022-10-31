<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating">
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

      <div class="form-floating">
        <select
          class="form-select"
          id="inputGroupId"
          aria-label="Группа"
          v-model="groupId"
        >
          <option value="debet">Доход</option>
        </select>
        <label for="inputGroupId">Группа</label>
      </div>

      <div class="form-floating">
        <select
          class="form-select"
          id="inputCAtegoryId"
          aria-label="Категория"
          v-model="categoryId"
        >
          <option value="debet">Доход</option>
        </select>
        <label for="inputCAtegoryId">Категория</label>
      </div>

      <div class="form-floating">
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
        <input
          type="number"
          step="10"
          min="10"
          max="999990"
          class="form-control form-control-sm"
          id="inputItemSum"
          placeholder="Сумма"
          v-model.number="sum"
          @blur="saveItem"
        />
        <label for="inputItemSum">Сумма</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupId: String,
    categoryId: String
  },
  emits: ['save-item'],
  data() {
    return {
      date: '',
      title: ''
    }
  },
  methods: {
    saveItem() {
      //this.$emit('save-item')
    }
  }
}
</script>