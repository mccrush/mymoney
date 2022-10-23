<template>
  <li
    class="
      list-group-item
      d-flex
      justify-content-between
      align-items-center
      pt-1
      pe-2
      pb-1
    "
  >
    <span>{{ category.title }}</span>
    <div>
      <ButtonEdit class="me-1" />
      <ButtonRemove @click="removeCategoryItem({ id: category.id })" />
    </div>
  </li>
</template>

<script>
import ButtonEdit from './buttons/ButtonEdit.vue'
import ButtonRemove from './buttons/ButtonRemove.vue'

export default {
  components: {
    ButtonEdit,
    ButtonRemove
  },
  props: {
    category: Object
  },
  emits: ['remove-category-item'],
  methods: {
    removeCategoryItem({ id }) {
      if (confirm('Точно удалить?')) {
        this.$emit('remove-category-item', { id })
      }
    }
  }
}
</script>