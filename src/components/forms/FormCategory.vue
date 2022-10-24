<template>
  <div class="row">
    <div class="col-12">
      <div class="form-floating mb-2">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputCategoryTitle"
          placeholder="Название категории"
          v-model.trim="item.title"
          @blur="saveItem"
        />
        <label for="inputCategoryTitle">Название категории</label>
      </div>

      <div class="form-floating mb-2">
        <select
          class="form-select"
          id="inputCategoryGroupId"
          aria-label="Выбор группы"
          v-model="item.groupId"
          @change="saveItem"
        >
          <option v-for="group in groups" :key="group.id" :value="group.id">
            {{ group.title }}
          </option>
        </select>
        <label for="inputCategoryGroupId">Группа</label>
      </div>

      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputCategorySum"
          placeholder="Сумма"
          v-model.number="item.sum"
          @blur="saveItem"
        />
        <label for="inputCategorySum">Сумма</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    groups: Array
  },
  emits: ['save-item'],
  methods: {
    saveItem() {
      //this.$emit('save-item')
    }
  }
}
</script>