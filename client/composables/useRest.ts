import {Ref, ref} from "vue";

type Params = {
    url?: string,
    query?: { [key: string]: string },
    body?: any
}

const fetchOptions = {
    headers: {"Content-Type": "application/json;charset=utf-8"}

}

const API = "http://localhost:7777"

export function useRest<T>(initial: T, url: string) {
    const data = ref<T>(initial) as Ref<T>
    const error = ref<any>(null)
    const loading = ref(false)

    async function GET(params?: Params) {
        const urlParam = params?.url ? "/" + params.url : ""
        const query = params?.query ? "?" + Object.entries(params.query).map(item => item[0] + "=" + item[1]).join("&") : ""
        loading.value = true
        error.value = null
        return await fetch(API + url + urlParam + query, fetchOptions).then(async res => {
            data.value = await res.json()
        }).catch((e) => {
            data.value = initial
            error.value = e
        }).finally(() => {
            loading.value = false
        })
    }

    return {data, loading, error, GET}
}