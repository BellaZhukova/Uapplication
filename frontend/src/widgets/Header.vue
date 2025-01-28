<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <h1>SEOLog</h1>
                <div class="header__data">
                    <p>{{ site.name_site }}</p>
                    <p>{{ site.url_site }}</p>
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
};

watch(() => props.siteId, () => {
    siteData();
});
</script>

<style lang="scss">
.header {
    background-color: #D9D9D9;
    padding: 20px 0;

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