<template>
  <li>
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