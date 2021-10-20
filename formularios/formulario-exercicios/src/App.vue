<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.trim="user.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="user.senha">
				</Rotulo>
				<Rotulo nome="Idade" >
					<input type="number" v-model.number="user.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" value="reproduzivel" v-model="caracteristicas"> Reproduzível</span>
					<span><input type="checkbox" value="intermitente" v-model="caracteristicas"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4">
            <input type="radio" v-model="produto" value="web"> Web
          </span>
					<span class="mr-4">
            <input type="radio" v-model="produto" value="mobile"> Mobile
          </span>
					<span>
            <input type="radio" v-model="produto" value="outro"> Outro
          </span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select name="" id="" v-model="prioridade">
						<option
                v-for="p in prioridades" :key="p.codigo"
                :value="p.codigo"
                :selected="p.codigo === 1">{{ p.codigo }} - {{ p.nome }}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ user.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ user.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ user.idade }} - {{ tipoIdade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span>{{ mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
          <ul>
            <li v-for="caracteristica in caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
          </ul>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ prioridade }} - {{ tipoPrioridade }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
  computed: {
    tipoIdade() {
      return typeof this.user.idade
    },
    tipoPrioridade() {
      return typeof this.prioridade
    },
  },
  data() {
    return {
      mensagem: '',
      caracteristicas: [],
      produto: 'web',
      escolha: true,
      prioridade: 1,
      prioridades: [
        {
          codigo: 1, nome: 'Baixa'
        },
        {
          codigo: 2, nome: 'Moderada',
        },
        {
          codigo: 3, nome: 'Alta',
        },
      ],
      user: {
        email: '',
        senha: '',
        idade: 25
      }
    }
  },
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
