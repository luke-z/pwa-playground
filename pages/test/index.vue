<template>
  <div>
    <h1 class="text-2xl">PWA Playground Test Page5</h1>
    <p><nuxt-link to="/">Link to index</nuxt-link></p>
    <p><nuxt-link to="/test/deep">Link to deep</nuxt-link></p>

    <p><button @click="refresh">refresh page</button></p>
    <p class="text-xl">dogs:</p>
    <p v-for="dog in dogs" :key="dog">{{ dog }}</p>
    <p v-if="id" class="mt-10">{{ id }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  useContext,
  computed,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { query } = useContext()
    const refresh = () => {
      window.location.reload()
    }

    const dogs = ref<any[]>([])

    onMounted(async () => {
      console.log('mounted test page, fluppip')
      dogs.value = (
        await fetch('https://dog.ceo/api/breed/hound/list').then(
          (response: any) => response.json()
        )
      ).message
      console.log(dogs.value)
    })

    const id = computed(() => query.value.id)

    return {
      refresh,
      id,
      dogs,
    }
  },
})
</script>

<style></style>
