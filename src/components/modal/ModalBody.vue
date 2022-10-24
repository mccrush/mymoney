<template>
  <div class="modal-body">
    <FormGroup :item="item" @save-item="saveItem" />
  </div>
</template>

<script>
import FormGroup from './../forms/FormGroup.vue'

export default {
  components: {
    FormGroup
  },
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