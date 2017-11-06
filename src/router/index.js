import Vue from 'vue'
import Router from 'vue-router'
import MagicCube from 'components/magic-cube/magic-cube'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'magic-cube',
      component: MagicCube
    }
  ]
})
