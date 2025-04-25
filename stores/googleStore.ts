import { defineStore } from 'pinia'

type State = {
    searchTerm: string
    isLoading: boolean
    isError: boolean
    isFetching: boolean
    data: string
    apiUri: string
}

export type ApiOptions = {
    method: string
    headers: {
        'Content-Type': string
        'Accept': string
    }
    body: string
}

const useImageStore = defineStore('googleStore', {
    state: (): State => ({
        searchTerm: 'give me a test',
        isLoading: true,
        isError: false,
        isFetching: false,
        data: '',
        apiUri: useRuntimeConfig().public.googleApiUrl,
    }),
    getters: {
        getisLoading: (state):boolean => state.isLoading,
        getSearchTerm: (state): string => state.searchTerm,
        getisError: (state): boolean => state.isError,
        getisFetching: (state): boolean => state.isFetching,
        getData: (state): string => state.data,
        getApiOptions(state):ApiOptions {
            return {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'},
                body: JSON.stringify({
                    contents:[{
                        parts: [{
                            text: state.searchTerm
                        }],
                    }]
                })
            }
        },
        getApiUri(state):string {
            return state.apiUri
        },
    },
    actions: {
        setSearchTerm(newTerm:string) {
            this.searchTerm = newTerm
        },
    }
})
export default useImageStore