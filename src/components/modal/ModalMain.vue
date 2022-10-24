<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <ModalHeader v-if="item" :item="item" />
        <ModalBody v-if="item" :item="item" @save-item="saveItem" />
        <!-- <ModalFooter v-if="item" :item="item" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from './ModalHeader.vue'
import ModalBody from './ModalBody.vue'
import ModalFooter from './ModalFooter.vue'

export default {
  components: {
    ModalHeader,
    ModalBody,
    ModalFooter
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