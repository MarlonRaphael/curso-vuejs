new Vue({
  el: '#app',
  data: {
    logs: [],
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
        this.logs = []
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
      this.hurt('player2', 5, 10, especial, this.player2.name, this.player1.name, 'alert-danger')

      if (this.player2.life > 0) {
        this.hurt('player1', 7, 12, false, this.player1.name, this.player2.name, 'alert-primary')
      }
    },
    hurt(prop, min, max, especial, source, target, cls) {
      const plus = especial ? 5 : 0
      const hurt = this.getRandom(min + plus, max + plus)
      this[prop].life = Math.max(this[prop].life - hurt, 0)
      this.registerLog(`${source} atingiu o ${target} com ${hurt}.`, cls)
    },
    healAndHurt() {
      this.heal(10, 15)
      this.hurt('player1', 7, 12, false, this.player2.name, this.player1.name, 'alert-danger')
    },
    heal(min, max) {
      const heal = this.getRandom(min, max)
      this.player1.life = Math.min(this.player1.life + heal, 100)
      this.registerLog(`${this.player1.name} ganhou força de ${heal}.`, 'alert-success')
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls })
    }
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false
    }
  }
})