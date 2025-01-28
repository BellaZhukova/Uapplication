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
import getSite from '../shared/api/getSite.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const apiName = ref([]);
const siteId = route.params.id;
const site = ref([]);

onMounted(async () => {
    await getApi(apiName);
    await getSite(siteId, site);
    console.log(site)
})
</script>

<style lang="scss"></style>