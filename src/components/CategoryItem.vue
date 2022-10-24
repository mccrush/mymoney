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
      <span class="badge bg-success me-2">8500</span>
      <ButtonEdit
        class="me-0"
        @click="$emit('show-modal', { item: category })"
      />
      <!-- <ButtonRemove @click="removeCategoryItem({ id: category.id })" /> -->
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
  emits: ['remove-category-item', 'show-modal'],
  methods: {
    removeCategoryItem({ id }) {
      if (confirm('Точно удалить?')) {
        this.$emit('remove-category-item', { id })
      }
    }
  }
}
</script>