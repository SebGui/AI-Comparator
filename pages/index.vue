<template>
    <div>
        Hello World
        <div v-if="isPending">Loading...</div>

        <div v-if="isFetching">Fetching...</div>
        <div v-if="isError && error">Error: {{ error.message }}</div>
        <div v-if="data" v-html="data.candidates[0].content.parts[0].text.replaceAll('\n', '<br>')"></div>

        <button @click="doSomething()" >test</button>
    </div>
</template>

<script setup lang="ts">
    import useQueryFetch from '../composables/useQueryFetch'
    import useGoogleStore from '../stores/googleStore'

    const googleStore = useGoogleStore()

    console.log(googleStore.getApiOptions);

    const { isPending, isFetching, isError, data, error } = useQueryFetch(
        'google', 
        googleStore.getApiUri, 
        googleStore.getApiOptions
    )

    /*const modifyData = (data:any) => {
        return data.candidates[0]
    }

    const modifiedData = useMemo(() => modifyData(data), [modifyData, data]);*/
    const modifiedData = {...data}

    googleStore.setSearchTerm('toto')

    watch(
        () => googleStore.searchTerm,
        (newValue:string) => {
            console.log('newValue', newValue);
        }, {immediate: true}
    )

    const doSomething = () => {
        useQueryFetch(
        'google', 
        googleStore.getApiUri, 
        googleStore.getApiOptions
        ).refetch()
        googleStore.setSearchTerm('toti')
    }

    console.log('toto');

</script>

<style scoped>
</style>