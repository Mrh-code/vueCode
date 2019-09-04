import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import controlPanel from '@/components/controlPanel'
import filePreview from '@/components/filePreview'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'HelloWorld' 
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/controlPanel',
      name: 'controlPanel',
      component: controlPanel
    },
    {
      path: '/filePreview',
      name: 'filePreview',
      component: filePreview
      
    }
  ]
})
