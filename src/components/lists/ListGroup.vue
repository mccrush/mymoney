<template>
  <div class="row">
    <div class="col-12">
      <div class="list-group">
        <button
          v-for="group in filterGroups"
          :key="group.id"
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="$emit('set-group-id', { groupId: group.id })"
        >
          {{ group.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vid: String
  },
  emits: ['set-group-id'],
  computed: {
    groups() {
      return this.$store.getters.groups
    },
    filterGroups() {
      return this.groups.filter(item => item.vid === this.vid)
    }
  }
}
</script>