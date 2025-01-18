<script setup lang="ts">
import Gallery from '@/components/Gallery.vue';
import { CatApi, type Cat } from '@/composables/catapi';
import { onMounted, ref } from 'vue';

const cats = ref<Cat[]>([])

window.addEventListener('scroll', checkPosition)

const obs = new ResizeObserver(checkPosition)
onMounted(() => obs.observe(document.body))

function checkPosition() {
  const threshold = document.body.offsetHeight - window.innerHeight
  const position = window.scrollY + window.innerHeight

  if (position >= threshold) {
    loadImages()
  }
}

let isLoading = false
async function loadImages(amount = 10) {
  if (isLoading) {
    return
  }
  isLoading = true

  const loaded = await CatApi.getCats(amount)
  cats.value.push(...loaded)

  isLoading = false
}
loadImages()

</script>

<template>
  <Gallery :cats="cats" />

  <p>... загружаем ещё котиков ...</p>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
