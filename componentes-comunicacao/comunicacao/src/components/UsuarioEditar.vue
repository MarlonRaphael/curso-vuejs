<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do Usuário: <strong>{{ age }}</strong></p>
    <button @click="changeAge">Alterar Idade</button>
    <button @click="restartAgeFn">Reiniciar Idade (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    age: {
      type: Number,
    },
    restartAgeFn: Function
  },
  methods: {
    changeAge() {
      this.age = 33
      barramento.changeAge(this.age)
    }
  }
}
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
