var likeButton = Vue.extend({
  template: '<span>{{counter}}<button v-on:click="clicked">いいね</button></span>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    clicked: function() {
      this.counter += 1
      this.$emit('alert')
    }
  }
})

new Vue({
  el: '#like-counter',
  components: {
    'like-button': likeButton
  },
  data: {
    count: 0
  },
  methods: {
    presentAlert: function() {
      if (this.count >= 10) {
        window.alert("これ以上押せません")
      } else {
        this.count += 1
      }
    }
  }
})
