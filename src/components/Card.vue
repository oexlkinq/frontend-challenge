<script setup lang="ts">
import type { Cat } from '@/composables/catapi';
import { useFavsStore } from '@/stores/favs';
import Heart from './Heart.vue';

const props = defineProps<{
    cat: Cat
}>()

const favsStore = useFavsStore()

function onToggle() {
    favsStore.toggleFav(props.cat)
}
</script>

<template>
    <div class="card" @click="onToggle">
        <img :src="props.cat.url" alt="котик" loading="lazy">
        <Heart class="heart" :clicked="props.cat.fav" />
    </div>
</template>

<style scoped>
.card {
    position: relative;
    background-color: #00000005;
    line-height: 0;
    aspect-ratio: 1;
}

.card img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
}

.card::before {
    content: '';
    position: absolute;
    inset: -16px;
    transition: box-shadow .1s;
}
.card:hover::before {
    box-shadow: 0 9px 18px #0000002E, 0 6px 5px #0000003D;
}

.heart {
    position: absolute;
    width: 15%;
    height: 15%;
    inset: auto 5% 5% auto;

    opacity: 0;
    transition: opacity .1s;
}
.card:hover .heart {
    opacity: 1;
}
</style>