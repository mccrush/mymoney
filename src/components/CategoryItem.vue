<template>
  <li class="list-group-item pt-1 pb-1">
    {{ category.title }}
  </li>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>