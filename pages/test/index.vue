<template>
  <div>
    <h1 class="text-2xl">PWA Playground Test Page</h1>
    <nuxt-link to="/">Link to index</nuxt-link>
    <button @click="refresh">refresh page</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const refresh = () => {
      window.location.reload()
    }

    return {
      refresh
    }
  },
})
</script>

<style></style>
