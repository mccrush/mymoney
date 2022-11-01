<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-4 pe-0">
          <button
            v-if="vid"
            @click="setVid('')"
            class="btn btn-sm btn-outline-dark lh-1 w-100"
          >
            Вид:
            {{ vids[vid] }}
          </button>
        </div>
        <div class="col-4 pe-0">
          <button
            v-if="groupId"
            @click="setGroupId({ groupId: '' })"
            class="btn btn-sm btn-outline-dark lh-1 w-100"
          >
            Группа:
            {{ groups.find(item => item.id === groupId).title }}
          </button>
        </div>
        <div class="col-4">
          <button
            v-if="categoryId"
            @click="setCategoryId({ categoryId: '' })"
            class="btn btn-sm btn-outline-dark lh-1 w-100"
          >
            Категория:
            {{ categories.find(item => item.id === categoryId).title }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="!vid" class="col-12 mt-2">
      <button
        @click="setVid('debet')"
        class="btn btn-lg btn-outline-success w-100"
      >
        {{ vids.debet }}
      </button>
      <button
        @click="setVid('credit')"
        class="btn btn-lg btn-outline-danger w-100 mt-3"
      >
        {{ vids.credit }}
      </button>
    </div>

    <div v-if="!groupId" class="col-12">
      <ListGroup :vid="vid" @set-group-id="setGroupId" class="mt-2" />
    </div>

    <div v-if="!categoryId" class="col-12">
      <ListCategory
        :groupId="groupId"
        @set-category-id="setCategoryId"
        class="mt-2"
      />
    </div>

    <div v-if="categoryId" class="col-12">
      <FormItem :groupId="groupId" :categoryId="categoryId" class="mt-2" />
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
  },
  data() {
    return {
      vid: '',
      groupId: '',
      categoryId: '',
      vids: { debet: 'Доход', credit: 'Расход' }
    }
  },
  computed: {
    groups() {
      return this.$store.getters.groups
    },
    categories() {
      return this.$store.getters.categories
    }
  },
  methods: {
    setVid(vid) {
      this.vid = vid
      this.groupId = ''
      this.categoryId = ''
    },
    setGroupId({ groupId }) {
      this.groupId = groupId
      this.categoryId = ''
    },
    setCategoryId({ categoryId }) {
      this.categoryId = categoryId
    }
  }
}
</script>