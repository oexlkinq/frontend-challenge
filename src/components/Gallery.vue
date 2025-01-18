<script setup lang="ts">
import { computed, ref } from 'vue';
import Card from './Card.vue';
import type { Cat } from '@/composables/catapi';

const props = defineProps<{
    cats: Cat[]
}>()

</script>

<template>
    <div class="gallery">
        <Card v-for="cat in props.cats" :key="cat.id" :cat="cat" />
    </div>
</template>

<style scoped>
.gallery {
    display: grid;
    gap: 50px;
    justify-items: stretch;

    grid: auto-flow auto / repeat(5, 1fr);
}

@media (max-width: 1600px) {
    .gallery {
        grid: auto-flow auto / repeat(3, 1fr);
    }
}
@media (max-width: 1200px) {
    .gallery {
        grid: auto-flow auto / repeat(2, 1fr);
    }
}
@media (max-width: 800px) {
    .gallery {
        grid: auto-flow auto / repeat(1, 1fr);
    }
}
</style>