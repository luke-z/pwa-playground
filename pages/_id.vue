<template>
  <div>
    <h1 class="text-2xl">PWA Playground dynamic page</h1>
    <p><nuxt-link to="/test">Link to test</nuxt-link></p>
    <p><button @click="refresh">refresh page</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter, useContext, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { query } = useContext()
    const refresh = () => {
      window.location.reload()
    }

    onMounted(() => {
      console.log('mounted dynamic page, fluppip')
    })

  
    return {
      refresh,
    }
  },
})
</script>

<style></style>
