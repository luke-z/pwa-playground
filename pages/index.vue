<template>
  <div>
    <h1 class="text-2xl">PWA Playground Index Page9</h1>
    <p><nuxt-link to="/test">Link to test page</nuxt-link></p>
    <p><nuxt-link to="/test?id=12">Link to test page with param</nuxt-link></p>
    <!-- <p>{{ post }}</p> -->
    <div id="log"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    // const post = ref([])

    onMounted(async () => {
      console.log('mounted index page, fluppip')
      fetch('https://dog.ceo/api/breed/hound/list')
      // post.value = await fetch('https://api.predic8.de/shop/products/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: 'Wildberries',
      //     price: 4.99,
      //     category_url: '/shop/categories/Fruits',
      //     vendor_url: '/shop/vendors/672',
      //   }),
      // }).then((response) => response.json())
    })

    return {
      // post,
    }
  },
})
</script>

<style></style>
