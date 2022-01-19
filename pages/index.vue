<template>
  <div>
    <h1 class="text-2xl">PWA Playground Index Page7</h1>
    <p><nuxt-link to="/test">Link to test page</nuxt-link></p>
    <p><nuxt-link to="/test?id=12">Link to test page with param</nuxt-link></p>
    <div id="log"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
     onMounted(() => {
      console.log('mounted index page, fluppip')
    })
  }
})
</script>

<style></style>
