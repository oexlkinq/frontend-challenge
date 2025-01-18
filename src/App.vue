<script setup lang="ts">
import FeedView from './views/FeedView.vue'
import FavouriteView from './views/FavouriteView.vue'
import { ref } from 'vue';

const views = [
  {
    title: 'Все котики',
    component: FeedView,
  },
  {
    title: 'Любимые котики',
    component: FavouriteView,
  },
]

const currentViewIndex = ref(0)
</script>

<template>
  <header>
    <nav class="nav">
      <a href="#" class="nav-link" v-for="(view, index) in views" @click="currentViewIndex = index"
        :class="{ active: index === currentViewIndex }">{{ view.title }}</a>
    </nav>
  </header>

  <main>
    <KeepAlive>
      <component :is="views[currentViewIndex].component" />
    </KeepAlive>
  </main>
</template>

<style scoped>
header,
main {
  padding-inline: 60px;
}

header {
  margin-bottom: 30px;
  background-color: #2196F3;
  box-shadow: 0 4px 4px #0000003D;
}

.nav {
  display: flex;
  list-style: none;
}

.nav-link {
  padding: 20px;
  text-decoration: none;
  color: white;
  opacity: 0.7;
}

.nav-link.active {
  background-color: #1E88E5;
  opacity: 1;
}
</style>
