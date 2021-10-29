<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <h3>{{ global }}</h3>
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <input type="text" :value="cpf | cpf | inverter"> <br>
    <input type="text" v-model="cpf">
    <hr>
    <Frutas />
    <hr>
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
  </div>
</template>

<script>
import Frutas from "./Frutas";
import frutasMixin from "./frutasMixin";
import usuarioMixin from "./usuarioMixin";

export default {
  components: { Frutas },
  mixins: [frutasMixin, usuarioMixin],
  filters: {
    cpf(value) {
      const arr = value.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  },
  data() {
    return {
      cpf: '09126825902',
    }
  },
  created() {
    console.log('Created - App.vue')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 1.5em;
}
</style>
