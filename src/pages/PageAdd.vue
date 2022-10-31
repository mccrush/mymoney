<template>
  <div class="row">
    <div class="col-12">
      <button class="btn btn-lg btn-outline-success w-100">Доход</button>
      <button class="btn btn-lg btn-outline-danger w-100 mt-3">Расход</button>
    </div>
    <div class="col-12">
      <ListGroup class="mt-2" />
    </div>

    <div class="col-12">
      <ListCategory class="mt-2" />
    </div>

    <div class="col-12">
      <FormItem class="mt-2" />
    </div>
  </div>
</template>

<script>
import ListGroup from './../components/lists/ListGroup.vue'
import ListCategory from './../components/lists/ListCategory.vue'
import FormItem from './../components/forms/FormItem.vue'

export default {
  components: {
    ListGroup,
    ListCategory,
    FormItem
  }
}
</script>