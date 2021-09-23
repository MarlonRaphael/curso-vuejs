new Vue({
    el: '#desafio',
    data: {
        name: 'Marlon Raphael',
        age: 27,
        imgSrc: 'https://picsum.photos/id/237/600/400'
    },
    methods: {
        randomNumber: function () {
            return Math.random()
        },
        ageMultiplied: function () {
            return this.age * 3;
        }
    }
})