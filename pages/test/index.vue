<template>
  <div>
    <h1 class="text-2xl">PWA Playground Test Page</h1>
    <nuxt-link to="/">Link to index</nuxt-link>
    <p><button @click="refresh">refresh page</button></p>
    <p v-if="id">{{ id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { query } = useContext()
    const refresh = () => {
      window.location.reload()
    }

    const id = computed(() => query.value.id)

    return {
      refresh,
      id
    }
  },
})
</script>

<style></style>
