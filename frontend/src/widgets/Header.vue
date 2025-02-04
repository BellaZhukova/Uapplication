<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link to="/" class="header__title">
                    <h1>SEOLog</h1>
                </router-link>
                <div class="header__data">
                    <div class="header__account" v-for="index in account" :key="index.id">
                        <p>{{ index.service_name }}</p>
                        <p>{{ index.login }}</p>
                    </div>
                    <div class="header__site" v-for="index in site" :key="index.id">
                        <p>{{ index.name_site }}</p>
                        <p>{{ index.url_site }}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import getSite from '../shared/api/getSite.js';
import getDataAccountById from '../shared/api/getDataAccountById.js';

const props = defineProps({
    siteId: {
        type: String,
        required: true
    }
});

const site = ref([]);
const account = ref([]);

const siteData = async () => {
    await getSite(props.siteId, site);
    await getDataAccountById(props.siteId, account);
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

    &__data, &__account, &__site {
        display: flex;
        gap: 20px;
    }

}
</style>