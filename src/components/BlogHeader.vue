<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客</router-link>
          <router-link to="/add-blog" exact>写博客</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader"
    }
</script>

<style scoped>

</style>
