<template>
  <li class="list-group-item">
    {{ group.title }}
  </li>
</template>

<script>
export default {
  props: {
    group: Object
  }
}
</script>