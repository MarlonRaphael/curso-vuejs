import Vue from 'vue'

export default new Vue({
  changeAge(age) {
    this.$emit('ageChanged', age)
  },
  whenChangedAge(callback) {
    this.$on('ageChanged', callback)
  }
})