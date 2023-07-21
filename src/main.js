import Vue from 'vue'
import App from './App.vue'
import router from "@/router"

import "@/assets/js/flexible"

Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

new Vue({
    el: '#app',
    render: h => h(App),
    router,
})