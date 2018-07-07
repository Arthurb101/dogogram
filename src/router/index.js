import Vue from 'vue'
import Router from 'vue-router'
import BlogPosts from '@/components/BlogPosts'
import CurrentView from '@/components/CurrentView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CurrentView',
      component: CurrentView
    }
  ]
})
