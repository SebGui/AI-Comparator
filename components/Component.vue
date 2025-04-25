<!--<template>
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

    const { isPending, isFetching, isError, data, error } = useQueryFetch('google', 'www.google.com')
</script>

<style scoped>

</style>-->