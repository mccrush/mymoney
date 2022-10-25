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
      <span
        v-if="category.sum"
        class="badge me-2"
        :class="{
          'bg-success': type === 'debet',
          'bg-danger': type === 'credit'
        }"
        >{{ category.sum }}</span
      >
      <ButtonEdit
        class="me-1"
        @click="$emit('show-modal', { item: category })"
      />
      <ButtonRemove
        @click="
          removeCategoryItem({
            groupId: category.groupId,
            categoryId: category.id
          })
        "
      />
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
    category: Object,
    type: String
  },
  emits: ['remove-category-item', 'show-modal'],
  methods: {
    removeCategoryItem({ groupId, categoryId }) {
      if (confirm('Точно удалить?')) {
        this.$emit('remove-category-item', { groupId, categoryId })
      }
    }
  }
}
</script>