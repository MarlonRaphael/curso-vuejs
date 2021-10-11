<template>
  <div class="citacoes">
    <Citacao>
<!--      <h4 slot="autor">Autor: </h4>-->
      <h4 slot="autor">{{ citacoes[indice].autor }}</h4>
<!--      <h4 slot="autor">{{ citacoes[indice].autor }}</h4>-->
<!--      <p>Citação</p>-->
      <p>{{ citacoes[indice].texto }}</p>
<!--      <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>-->
      <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
    </Citacao>
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
  </div>
</template>

<script>
import Citacao from "@/components/Citacao";

export default {
  components: {
    Citacao
  },
  data() {
    return {
      numero: 0,
      citacoes: [{
        fonte: 'Jornal do Empreendedor',
        texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
        autor: 'Margaret Mead'
      }, {
        fonte: 'Frases de Mãe',
        texto: 'Isso não é um quarto, é um chiqueiro.',
        autor: 'Roberta'
      }, {
        fonte: 'Frases de Pai',
        texto: 'Vou contar até 3! 1, 2, 2...',
        autor: 'Gustavo'
      }]
    }
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3)
    }
  },
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style scoped>
  .citacoes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    /*color: green;*/
  }
</style>
