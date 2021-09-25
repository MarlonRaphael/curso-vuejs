new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Exibindo alerta')
        },
        updateValue(event) {
            this.valor = event.target.value
        },
        updateWithEnter(event) {
            this.valor = event.target.value
        }
    }
})