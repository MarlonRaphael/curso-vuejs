<template>
  <div id="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
    <div>teste</div>
  </div>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    adicionar() {
      this.contador++
    },
    subtrair() {
      this.contador--
    }
  }
}
</script>

<style scoped>
  /*div {*/
  /*  border: 1px solid blue;*/
  /*}*/

  span {
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
  }

  button {
    margin: 5px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    outline: 0;
  }
</style>