
var tabButton = Vue.extend({
  template: '#tab-button',
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    active() {
      return this.value === this.id ? 'active' : false
    }
  }
})

var tabview = Vue.extend({
  components: {
    'TabItem': tabButton
  },
  template: '#tab-view',
  data() {
    return {
      currentId: 1,
      list: [
        { id: 1, label: 'Tab1', content: 'コンテンツ1' },
        { id: 2, label: 'Tab2', content: 'コンテンツ2' },
        { id: 3, label: 'Tab3', content: 'コンテンツ3' }
      ]
    }
  },
  computed: {
    current() {
      // ここわからない
      return this.list.find(el => el.id === this.currentId) || {}
    }
  }
})



new Vue ({
  el: "#app",
  components: {
    'tabview': tabview
  }
})