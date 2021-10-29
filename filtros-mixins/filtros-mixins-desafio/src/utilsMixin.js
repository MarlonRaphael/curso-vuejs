export default {
  computed: {
    fullNameFn() {
      return this.fullName.replace(/\s/g, ',')
    },
    countWordsFn() {
      return this.phrase.split(' ').map(word => `${word} (${word.length})`).join(' ')
    }
  },
}