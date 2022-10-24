<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
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
  }
}
</script>