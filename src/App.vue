

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <GroupAddItem @add-group="addGroup" />
        <GroupList :groups="groups" />
      </div>
    </div>
  </div>
</template>

<script>
import ClassGroup from './classes/ClassGroup'

import GroupAddItem from './components/GroupAddItem.vue'
import GroupList from './components/GroupList.vue'

export default {
  components: {
    GroupAddItem,
    GroupList
  },
  data() {
    return {
      groups: JSON.parse(localStorage.getItem('mm-groups') || '[]')
    }
  },
  methods: {
    addGroup({ type, title }) {
      const group = Object.assign({}, new ClassGroup(type, title))

      this.groups.push(group)

      localStorage.setItem('mm-groups', JSON.stringify(this.groups))
    }
  }
}
</script>


<style scoped>
</style>
