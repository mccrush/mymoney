<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating">
        <input
          type="datetime-local"
          class="form-control form-control-sm"
          id="inputItemDateCreate"
          placeholder="Дата"
          v-model="date"
        />
        <label for="inputItemDateCreate">Дата</label>
      </div>

      <!-- <div class="form-floating">
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
      </div> -->

      <div class="form-floating mt-2">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputItemTitle"
          placeholder="Название"
          v-model.trim="title"
          @blur="addItem"
        />
        <label for="inputItemTitle">Название</label>
      </div>

      <div class="form-floating mt-2">
        <input
          type="number"
          step="10"
          min="10"
          max="999990"
          class="form-control form-control-sm"
          id="inputItemSum"
          placeholder="Сумма"
          v-model.number="sum"
        />
        <label for="inputItemSum">Сумма</label>
      </div>

      <button
        @click="addItem"
        class="btn btn-lg btn-outline-success w-100 mt-2"
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
import getDateNow from './../../scripts/getDateNow'
import ClassItem from './../../classes/ClassItem'

export default {
  props: {
    groupId: String,
    categoryId: String
  },
  emits: ['save-item'],
  data() {
    return {
      date: getDateNow(),
      title: '',
      sum: null
    }
  },
  methods: {
    addItem() {
      if (this.title && this.sum) {
        const item = Object.assign(
          {},
          new ClassItem(
            this.groupId,
            this.categoryId,
            this.title,
            this.date,
            this.sum
          )
        )

        this.$store.dispatch('addItem', { item })

        this.title = ''
        this.sum = null
      }
    }
  }
}
</script>