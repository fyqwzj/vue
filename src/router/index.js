import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show-blog',
      component: ShowBlog
    },

    {
      path: '/add-blog',
      name: 'add-blog',
      component: AddBlog
    }


  ]
})
