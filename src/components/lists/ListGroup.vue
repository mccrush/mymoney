<template>
  <div class="row">
    <div class="col-12">
      <div class="list-group">
        <button
          v-for="group in groups"
          :key="group.id"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          {{ group.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    groups() {
      return this.$store.getters.groups
    }
  }
}
</script>