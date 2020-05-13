// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'




Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(router)

//自定义指令1
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})
//自定义指令2
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth ="1260px"
    }else if(binding.value =='narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg =='column'){
      el.style.background="#6677cc";

    }
  }
})
//自定义过滤器1
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
//自定义过滤器2
Vue.filter("snippt",function(value){
  return value.slice(0,150)+"...";
})


//创建路由
// const router = new VueRouter({
//
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,

})

