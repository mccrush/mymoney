<template>
  <nav class="navbar bg-light shadow-sm">
    <div class="container-fluid">
      <ButtonShowOffCanvas
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
      />
    </div>
  </nav>
</template>

<script>
import ButtonShowOffCanvas from './../buttons/ButtonShowOffCanvas.vue'

export default {
  components: {
    ButtonShowOffCanvas
  }
}
</script>