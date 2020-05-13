<template>
    <div id="show-blog" v-theme:column="'wide'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div class="single-blog" v-for="blog in filteredBlogs">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        <article>{{blog.body | snippt}}</article>
      </div>
    </div>
</template>

<script>
    export default {
        name: "show-blog",
        data(){
          return{
            blogs:[],
            search:""
          }
        },
      created(){
          this.$http.get("http://jsonplaceholder.typicode.com/posts")
        .then(function(data){
         this.blogs = data.body.slice(0,10);
         //console.log(this.blogs);
        })
      },
      computed:{
          filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
               return blog.title.match(this.search);
            })
          }
      },
      filters:{
          "to-uppercase":function(value){
            return value.toUpperCase();
          }
      }
    }
</script>

<style scoped>
#show-blog{
  max-width:800px;
  margin:0 auto;
}
  .single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
    background:#eee;
  }
</style>
