<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" :value="value.nome" @input="alterarNome">
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" :value="value.sobrenome" @input="alterarSobreNome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "@/components/Rotulo";

export default {
  name: "NomeCompleto",
  components: { Rotulo },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    alterarNome(event) {
      this.$emit('input', {
        nome: event.target.value,
        sobrenome: this.value.sobrenome
      })
    },
    alterarSobreNome(event) {
      this.$emit('input', {
        nome: this.value.nome,
        sobrenome: event.target.value
      })
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>