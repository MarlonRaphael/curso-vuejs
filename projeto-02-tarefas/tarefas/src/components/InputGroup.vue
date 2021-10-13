<template>
  <div class="input-group my-5">
    <input type="text" class="form-control" placeholder="Add New Task"
           aria-label="Add New Task" aria-describedby="button-new-task"
           v-model="name" @keydown.enter="add"
    >
    <button class="btn btn-info text-white" @click="add"
            type="button" id="button-new-task"
    >
      <strong>+</strong>
    </button>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  data() {
    return {
      name: ''
    }
  },
  props: {
    tasks: {
      type: Array,
    }
  },
  methods: {
    add() {
      this.$emit('taskAdded', {name: this.name})
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>