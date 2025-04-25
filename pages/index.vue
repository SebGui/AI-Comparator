<template>
    <div>
        Hello World
        <div v-if="isPending">Loading...</div>

        <div v-if="isFetching">Fetching...</div>
        <div v-if="isError && error">Error: {{ error.message }}</div>
        <div v-if="data"> {{ data }}</div>
    </div>
</template>

<script setup lang="ts">
    import useQueryFetch from '../composables/useQueryFetch'
    import useGoogleStore from '../stores/googleStore'

    const googleStore = useGoogleStore()

    console.log(googleStore.getApiOptions);

    const { isPending, isFetching, isError, data, error } = useQueryFetch(/*{
      queryKey: ['todos'],
      queryFn: getTodos,
    }*/'google', googleStore.getApiUri, googleStore.getApiOptions)
</script>

<style scoped>
</style>