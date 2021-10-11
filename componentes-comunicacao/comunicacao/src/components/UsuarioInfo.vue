<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do Usuário: <strong>{{ invertName() }}</strong></p>
    <p>Idade do Usuário: <strong>{{ age }}</strong></p>
    <button @click="restartName">Reiniciar Nome</button>
    <button @click="restartNameFn()">Reiniciar Nome (Callback)</button>

  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    name: {
      type: String,
      default: 'Marlon',
    },
    age: {
      type: Number,
    },
    restartNameFn: Function
  },
  methods: {
    invertName() {
      return this.name.split('').reverse().join('')
    },
    restartName() {
      this.name = 'Marlon'
      this.$emit(this.name)
    }
  },
  created() {
    barramento.whenChangedAge('ageChanged', age => {
      this.age = age
    })
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
