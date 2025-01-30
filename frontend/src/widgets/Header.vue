<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link to="/" class="header__title">
                    <h1>SEOLog</h1>
                </router-link>
                <div class="header__data" v-for="index in site" :key="index.id">
                    <p>{{ index.name_site }}</p>
                    <p>{{ index.url_site }}</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import getSite from '../shared/api/getSite.js';

const props = defineProps({
    siteId: {
        type: String,
        required: true
    }
});

const site = ref([]);

const siteData = async () => {
    console.log(props.siteId);
    await getSite(props.siteId, site);
    console.log(site)
};

watch(() => props.siteId, () => {
    siteData();
});
</script>

<style lang="scss">
.header {
    background-color: #D9D9D9;
    padding: 20px 0;

    &__title {
        text-decoration: none;
    }

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__data {
        display: flex;
        gap: 20px;
    }
}
</style>