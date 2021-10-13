<template>
  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
    <div :class="['card', 'text-white', statusClass, 'mb-3']" style="max-width: 18rem;"
         @click="$emit('taskStateChanged', task)"
    >
      <div class="card-body">
        <div class="card-title align-items-center">
          <button type="button" class="btn-close btn-close-white float-end" aria-label="Close"
                  @click.stop="$emit('taskDeleted', task)"></button>
          <h5 class="m-0">{{ task.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    //
  },
  computed: {
    statusClass() {
      return this.task.pending ? 'bg-danger pending' : 'bg-success done'
    }
  }
}
</script>

<style scoped>

.card {
  cursor: pointer;
  user-select: none;
}

.done {
  border-left: 10px solid #076538 !important;
  text-decoration: line-through;
}

.pending {
  border-left: 10px solid #8d0e1c!important;
}
</style>