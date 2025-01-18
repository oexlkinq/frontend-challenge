import { defineStore } from 'pinia'
import type { Cat } from '@/composables/catapi'

export const usePersistentStore = defineStore('persistent', {
  state: () => ({
    favs: [] as Cat[],
  }),
  persist: true,
})
