<template>
  <li
    class="list-group-item"
    :class="{
      'list-group-item-danger': group.type === 'credit',
      'list-group-item-success': group.type === 'debet'
    }"
  >
    <div class="d-flex justify-content-between align-items-center">
      <span>{{ group.title }}</span>
      <div>
        <ButtonEdit
          class="me-2"
          @click="$emit('show-modal', { item: group })"
        />
        <ButtonRemove @click="removeGroupItem({ id: group.id })" />
      </div>
    </div>
    <CategoryAddItem @add-category="addCategory" />
    <CategoryList :categories="group.categories" />
  </li>
</template>

<script>
import ClassCategory from './../classes/ClassCategory'

import ButtonEdit from './buttons/ButtonEdit.vue'
import ButtonRemove from './buttons/ButtonRemove.vue'
import CategoryAddItem from './CategoryAddItem.vue'
import CategoryList from './CategoryList.vue'

export default {
  components: { ButtonEdit, ButtonRemove, CategoryAddItem, CategoryList },
  props: {
    group: Object
  },
  emits: ['remove-group-item', 'add-category-item', 'show-modal'],
  methods: {
    removeGroupItem({ id }) {
      if (confirm('Точно удалить?')) {
        this.$emit('remove-group-item', { id })
      }
    },

    addCategory({ title }) {
      const category = Object.assign(
        {},
        new ClassCategory(this.group.id, title)
      )

      this.$emit('add-category-item', { category })
    }
  }
}
</script>