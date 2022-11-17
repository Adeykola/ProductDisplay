const app = Vue.createApp({
    data() {
      return {
        counter: [],
        premium: true,
      }
    },
    methods: {
        updateCounter(id) {
            this.counter.push(id)
    },
    removeById(id) {
        const index = this.counter.indexOf(id)
            if (index > -1) {
                this.counter.splice(index, 1)
            }
    }
    }
  })
