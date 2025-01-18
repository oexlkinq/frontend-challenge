<script setup lang="ts">
import Gallery from '@/components/Gallery.vue';
import { useFavsStore } from '@/stores/favs';

const favsStore = useFavsStore()
</script>

<template>
  <Gallery :cats="favsStore.favs" />
</template>

<style>

</style>
