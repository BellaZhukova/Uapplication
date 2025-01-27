<template>
    <div class="container">
        <h1>DDDDDDDDDDD</h1>
        <div v-for="index in apiName" :key="index.id">
            <p>{{ index.name_api }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import getApi from "../shared/api/getApi.js"
const apiName = ref([]);

onMounted(() => {
    getApi(apiName);
    console.log(apiName)
})
</script>

<style lang="scss"></style>