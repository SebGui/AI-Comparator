<template>
    <header>
        <div class="headerContainer">
            Header
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .headerContainer {
        padding: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background-color: var(--mainBackgroundLighter);
    }
</style>