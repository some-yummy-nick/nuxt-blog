<template>
  <div class='container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300'>
    <PostItem v-for='post in posts' :key="'post-'+ post.id" :post='post' />
  </div>
  <!--  <div>Description: {{ weather.weather[0].description }}</div>-->
  <!--  <div>Temperature: {{ weather.main.temp }} C</div>-->
</template>

<script setup>
// const {data: weather} = await useFetch('/api/weather')
const posts = await useNuxtApp().$apiFetch('/api/posts')
</script>

<style scoped>

</style>