import { useFavsStore } from "@/stores/favs"
import { reactive } from "vue"

export class CatApi {
    static async getCats(limit = 10) {
        const favsStore = useFavsStore()

        const url = new URL('https://api.thecatapi.com/v1/images/search')
        url.searchParams.append('limit', limit.toString())

        try {
            const resp = await fetch(url)
            const res = await resp.json() as Cat[]
    
            return res.map(({id, url}) => reactive({id, url, fav: favsStore.isFav(id)}))
        } catch (e) {
            alert('cant fetch cat images: ' + String(e))
            throw e
        }
    }
}

export type Cat = {
    id: string,
    url: string,
    fav: boolean,
}