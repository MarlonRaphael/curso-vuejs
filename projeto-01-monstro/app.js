new Vue({
  el: '#app',
  data: {
    running: false,
    player1: {
      name: 'Fernanda',
      life: 100,
    },
    player2: {
      name: 'Monstro',
      life: 100,
    },
  },
  computed: {
    hasResult() {
      return this.player1.life === 0 || this.player2.life === 0
    }
  },
  methods: {
    lifeStatus(life) {
      return life < 20 ? 'bg-danger' : 'bg-success'
    },
    startGame() {
      if (!this.running) {
        this.running = true
        this.player1.life = 100
        this.player2.life = 100
      }
    },
    endGame() {
      if (this.running) {
        this.running = false
        this.player1.life = 100
        this.player2.life = 100
      }
    },
    attack(especial) {
      this.hurt('player1', 7, 12, false)
      this.hurt('player2', 5, 10, especial)
    },
    hurt(prop, min, max, especial) {
      const plus = especial ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)
      this[prop].life = Math.max(this[prop].life - hurt, 0)
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    }
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false
    }
  }
})