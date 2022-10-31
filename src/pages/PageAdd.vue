<template>
  <div class="row">
    <div class="col-12">
      <button class="btn btn-lg btn-outline-success w-100">Доход</button>
      <button class="btn btn-lg btn-outline-danger w-100 mt-3">Расход</button>
    </div>
    <div class="col-12">
      <FormItem />
    </div>
  </div>
</template>

<script>
import FormItem from './../components/forms/FormItem.vue'

export default {
  components: {
    FormItem
  }
}
</script>