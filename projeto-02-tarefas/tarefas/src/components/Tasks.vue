<template>
  <div class="row">
    <template v-if="tasks.length">
      <Task v-for="(task, i) in tasks" :key="task.name"
            @taskStateChanged="$emit('taskStateChanged', i)"
            @taskDeleted="$emit('taskDeleted', i)"
            :task="task"
      />
    </template>
    <h3 class="text-center text-light" v-else>Sua vida está em dia :)</h3>
  </div>
</template>

<script>
import Task from "@/components/Task";

export default {
  name: "Tasks",
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>