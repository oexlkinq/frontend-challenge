import { defineStore } from 'pinia'
import type { Cat } from '@/composables/catapi'
import { usePersistentStore } from './persistent'

export const useFavsStore = defineStore('favs', {
  state: () => {
        const persStore = usePersistentStore()
        const favs = persStore.favs
        return ({
            favs,
            favsMap: new Map<string, Cat>(favs.map(fav => [fav.id, fav])),
        })
    },
  actions: {
    toggleFav(cat: Cat) {
        if (this.favsMap.has(cat.id)) {
            this.favsMap.delete(cat.id)
        } else {
            this.favsMap.set(cat.id, cat)
        }

        cat.fav = !cat.fav

        const persStore = usePersistentStore()
        persStore.favs = this.favs = Array.from(this.favsMap.values())
    },
    isFav(cat: Cat | string) {
        return this.favsMap.has((typeof cat === 'string') ? cat : cat.id)
    },
  },
})
