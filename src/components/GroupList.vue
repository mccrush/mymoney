<template>
  <ul class="list-group">
    <GroupItem v-for="group in groups" :key="group.id" :group="group" />
  </ul>
</template>

<script>
import GroupItem from './GroupItem.vue'

export default {
  components: {
    GroupItem
  },
  props: {
    groups: Array
  }
}
</script>