<template>
  <div
    id="offcanvasExample"
    class="offcanvas offcanvas-start"
    tabindex="-1"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="list-group">
        <button
          v-for="rout in routes"
          :key="rout.page"
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="changePage(rout.href)"
        >
          {{ rout.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import routes from './../../data/routes'

export default {
  data() {
    return {
      routes
    }
  },
  methods: {
    changePage(href) {
      window.location.assign(href)
    }
  }
}
</script>