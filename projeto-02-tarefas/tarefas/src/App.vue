<template>
  <div id="app">
    <h1>To do list</h1>
    <div class="container">
      <ProgressBar :progress="progress" />
      <InputGroup :tasks="tasks" @taskAdded="addTask" />
      <Tasks :tasks="tasks"
             @taskStateChanged="toggleStateTask"
             @taskDeleted="deleteTask" />
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import InputGroup from "@/components/InputGroup";
import Tasks from '@/components/Tasks'

export default {
  components: { ProgressBar, InputGroup, Tasks },
  data() {
    return {
      tasks: [],
    }
  },
  computed: {
    progress() {
      const total = this.tasks.length
      const doned = this.tasks.filter(t => !t.pending).length
      return Math.round((doned / total) * 100) || 0
    }
  },
  watch: {
    tasks: {
      deep:true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name
      const reallyName = this.tasks.filter(sameName).length === 0

      if (reallyName) {
        this.tasks.push({
          name: task.name,
          pending: true
        })
      }

    },
    deleteTask(i) {
      this.tasks.splice(i, 1)
    },
    toggleStateTask(i) {
      this.tasks[i].pending = !this.tasks[i].pending
    }
  },
  created() {
    const json = localStorage.getItem('tasks')
    const array = JSON.parse(json)

    this.tasks = Array.isArray(array) ? array : []
  }
}
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #FFF;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
