<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <h3>Nome é {{ name }}</h3>
    <h4>Idade é {{ age }}</h4>
    <button @click="updateName">Alterar nome</button>
    <hr>
    <div class="componentes">
      <app-usuario-info
          :name="name"
          :age="age"
          :restartNameFn="restartName"
          @nameChanged="name = $event"
      />
      <app-usuario-editar :age="age"
                          :restartAgeFn="restartAge" />
<!--      <app-usuario-editar-->
<!--          :age="age"-->
<!--          @ageChanged="age = $event + 1"-->
<!--          :restartAgeFn="restartAge"-->
<!--      />-->
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
  components: {AppUsuarioInfo, AppUsuarioEditar},
  data() {
    return {
      name: 'Marlon',
      age: 27
    }
  },
  methods: {
    updateName() {
      this.name = 'Fernanda'
    },
    restartName() {
      return this.name = 'Marlon'
    },
    restartAge() {
      return this.age = 33
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
