<template>
    <div class="container">
        <div class="pattern">
            <h1 class="pattern__title">Шаблон сбора SEO-показателей</h1>
            <div class="metriks">
                <div class="metriks__names">
                    <p class="metriks__name">Метрики</p>
                    <p class="metriks__data">Данные</p>
                    <p class="metriks__interval">Интервал сбора</p>
                </div>
                <div class="metriks__item" v-for="index in apiName" :key="index.id">
                    <p class="metriks__name">{{ index.name_api }}</p>
                    <p class="metriks__data">
                        <input type="checkbox" :name="'set' + index.api_id" :id="'set' + index.api_id">
                        <label :for="'set' + index.api_id">Собирать</label>
                    </p>
                    <div class="metriks__interval">
                        <div class="interval">
                            <input type="radio" :name="'interval_' + index.api_id" :id="'day_' + index.api_id">
                            <label :for="'day_' + index.api_id">1 раз в день</label>
                        </div>
                        <div class="interval">
                            <input type="radio" :name="'interval_' + index.api_id" :id="'hour_' + index.api_id">
                            <label :for="'hour_' + index.api_id">1 раз в час</label>
                        </div>
                    </div>
                </div>
            </div>
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

<style lang="scss">
@use "../assets/scss/variables.scss" as *;
.pattern {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    padding-top: $padding-top;

    .metriks {
        display: flex;
        flex-direction: column;
        width: 100%;

        &__names {
            display: flex;
            width: 100%;
        }

        &__name {
            width: 100%;
            border: 1px solid black;
            text-align: center;
            padding: 10px;
        }

        &__data {
            width: 100%;
            border: 1px solid black;
            text-align: center;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        &__interval {
            width: 100%;
            border: 1px solid black;
            text-align: center;
            padding: 10 30pxpx;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }

        &__item {
            display: flex;
        }
    }

    .interval {
        display: flex;
        align-items: center;
        gap: 5px;
    }
}
</style>