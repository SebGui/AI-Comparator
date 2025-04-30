import { useQuery } from "@tanstack/vue-query"
//import { useRuntimeConfig } from '#app'
import type { ApiOptions } from "~/stores/googleStore";

export default function useQueryFetch(queryKey: string, endpoint: string, options: ApiOptions) {
  const fetcher = async <T>(): Promise<T> => {
    try {
        // Update baseURL in due time : might only be endpoint
      //const { data, error } = await useFetch(`${config.public.baseURL}/api/${endpoint}`, { 
    const { data, error } = await useFetch(`${endpoint}`, { 
        method: options.method,// Adapte with params from store
        //credentials: 'include', 
        headers: options.headers,// Adapte with params from store
        body: options.body// Adapte with params from store
      })
      if (error.value) {
        throw new Error(error.value?.data?.error || "An unknown error occurred during data fetching.")
      }
      if (!data.value) {
        throw new Error("No data returned from the fetch operation.")
      }
      return data.value as T
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new Error(err.value || "An error occurred during data fetching.")
    }
  }

  return useQuery({ queryKey: [queryKey], queryFn: fetcher })
}

// Could be in another file
// Get related API key from queryKey
/*const getApiKeyFromQueryKey = (queryKey: string):string => {
    const config = useRuntimeConfig()

    switch (queryKey) {
        case 'google':
            return config.googleApiKey
        default:
            return ""
    }
}*/