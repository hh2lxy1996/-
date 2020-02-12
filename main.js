new Vue({
    el:'#app',
    data: {
        see: false
    },
    methods: {
        toggle: function() {
            this.see = !this.see
        }
    }
    })
