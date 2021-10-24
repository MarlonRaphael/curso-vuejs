<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!submited">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto v-model="nomeCompleto" />
        <Rotulo nome="E-mail">
          <input type="email" v-model="usuario.email">
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha">
        </Rotulo>
        <Rotulo nome="Armazenar Dados?">
          <Escolha v-model="salvarDados"/>
        </Rotulo>
        <button type="button" @click.prevent="enviar()">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <input type="text" :value="nomeCompleto.nome" readonly>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <input type="text" :value="nomeCompleto.sobrenome" readonly>
        </Rotulo>
        <Rotulo nome="E-mail">
          <input type="email" :value="usuario.email" readonly>
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" :value="usuario.senha" readonly>
        </Rotulo>
        <Rotulo nome="Armazenar Dados?">
          <input type="checkbox" v-model="salvarDados" disabled readonly>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<!-- Exercicio 03 -->
<!-- Crie um componente personalizado NomeCompleto -->
<!-- Esse componente deve receber Nome e Sobrenome -->

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from "./components/Escolha";
import NomeCompleto from "./components/NomeCompleto";

export default {
  name: 'app',
  components: { Rotulo, Escolha, NomeCompleto },
  data() {
    return {
      submited: false,
      nomeCompleto: {
        nome: '',
        sobrenome: '',
      },
      usuario: {
        email: '',
        senha: '',
      },
      salvarDados: false
    }
  },
  methods: {
    enviar() {
      this.submited = true
    }
  }
}
</script>

<style>

body {
  background-color: #ECECEC;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #FFF;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #AAA;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #DDD;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #FFF;
  background-color: #2196F3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
