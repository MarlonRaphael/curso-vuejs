<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do Usuário: <strong>{{ invertName() }}</strong></p>
    <button @click="restartName">Reiniciar Nome</button>
    <button @click="restartNameFn">Reiniciar Nome (Callback)</button>

  </div>
</template>

<script>
export default {
  props: {
    // name: [String, Array]
    // name: String
    name: {
      type: String,
      default: 'Marlon',
      // default: function () {
      //   return Array(10).fill(0).join(',')
      // },
      // required: true
    },
    restartNameFn: Function
  },
  methods: {
    invertName() {
      // return this.name
      return this.name.split('').reverse().join('')
    },
    restartName() {
      // const old = this.name
      this.name = 'Marlon'
      // this.$emit('nameChanged', {
      //   newName: this.name,
      //   oldName: old
      // })
      this.$emit('nameChanged', this.name)
    }
  }
}
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
