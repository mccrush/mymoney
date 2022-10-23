<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{
      'list-group-item-danger': group.type === 'credit',
      'list-group-item-success': group.type === 'debet'
    }"
  >
    <span>{{ group.title }}</span>
    <div>
      <ButtonRemove />
    </div>
  </li>
</template>

<script>
import ButtonRemove from './buttons/ButtonRemove.vue'
export default {
  components: { ButtonRemove },
  props: {
    group: Object
  }
}
</script>