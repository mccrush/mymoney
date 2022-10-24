<template>
  <div class="modal-body">
    <FormGroup
      v-if="item.type === 'debet' || item.type === 'credit'"
      :item="item"
      @save-item="saveItem"
    />
    <FormCategory
      v-if="item.type === 'category'"
      :item="item"
      :groups="groups"
      @save-item="saveItem"
    />
  </div>
</template>

<script>
import FormGroup from './../forms/FormGroup.vue'
import FormCategory from './../forms/FormCategory.vue'

export default {
  components: {
    FormGroup,
    FormCategory
  },
  props: {
    item: Object,
    groups: Array
  },
  emits: ['save-item'],
  methods: {
    saveItem() {
      this.$emit('save-item')
    }
  }
}
</script>