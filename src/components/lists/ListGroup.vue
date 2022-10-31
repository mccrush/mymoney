<template>
  <div class="row">
    <div class="col-12">
      <div class="list-group">
        <button
          v-for="group in groups"
          :key="group.page"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          {{ group.title }}
        </button>
      </div>
    </div>
  </div>
</template>