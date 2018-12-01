import Vue from 'vue';
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Topic from '../pages/Topic/Topic.vue';
import Classify from '../pages/Classify/Classify.vue';
import ShopCart from '../pages/ShopCart/ShopCart.vue';
import Profile from '../pages/Profile/Profile.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/msite',
      component:Msite,
    },
    {
      path:'/topic',
      component:Topic,
    },
    {
      path:'/classify',
      component:Classify,
    },
    {
      path:'/shopcart',
      component:ShopCart,
    },
    {
      path:'/profile',
      component:Profile,
    },
  ]
})
