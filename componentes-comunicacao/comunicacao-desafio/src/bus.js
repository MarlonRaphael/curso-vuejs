import Vue from "vue";

export default new Vue({
  methods: {
    selectUser(user) {
      this.$emit('userSelected', user)
    },
    whenSelectUser(callback) {
      this.$on('userSelected', callback)
    }
  }
})