new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		greenCircle: '',
		classGreen: 'green',
		classCircle: 'circle',
		userClass1: '',
		userClass2: '',
		userStyle: '',
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque';
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if (valor === 100) clearInterval(temporizador)
			}, 300)
		}
	},
	computed: {
		applyClass() {
			if (this.greenCircle === 'true') {
				return {
					green: 'green',
					circle: 'circle',
				}
			}
		},
	}
})
