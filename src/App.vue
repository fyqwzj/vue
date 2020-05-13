<template>
  <div id="app">
<!--    <add-blog></add-blog>-->
<!-- <show-blog></show-blog>-->
    <BlogHeader></BlogHeader>
  <router-view></router-view>

  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'
export default {
  name: 'app',
  components:{
    AddBlog,ShowBlog,BlogHeader
  }

}
</script>

<style>
ul{
  list-style-type:none;
  text-align:center;
  margin:0;
}
  li{
    display:inline-block;
    margin:0 20px;

  }
a{
  color:#fff;
  text-decoration:none;
  border-radius:5px;
}
  nav{
    background:crimson;
    margin-bottom:40px;
    padding:30px 0;

  }
  .router-link-active{
    background:rgba(255,255,255,0.8);
    color:#444;
  }
</style>
