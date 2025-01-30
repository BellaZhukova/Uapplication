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
                        <input type="checkbox" v-if="model[index.api_id]"  :name="'set' + index.api_id" :id="'set' + index.api_id" v-model="model[index.api_id].isChecked">
                        <label :for="'set' + index.api_id">Собирать</label>
                    </p>
                    <div class="metriks__interval">
                        <div class="interval">
                            <input type="radio" v-if="model[index.api_id]"  :name="'interval_' + index.api_id" :id="'day_' + index.api_id" value="day" v-model="model[index.api_id].interval">
                            <label :for="'day_' + index.api_id">1 раз в день</label>
                        </div>
                        <div class="interval">
                            <input type="radio" v-if="model[index.api_id]"  :name="'interval_' + index.api_id" :id="'hour_' + index.api_id" value="hour" v-model="model[index.api_id].interval">
                            <label :for="'hour_' + index.api_id">1 раз в час</label>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonApp @click="checkState()">Сохранить</ButtonApp>
            <p>{{ dataMetriks }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import getApi from "../shared/api/getApi.js"
import getSite from '../shared/api/getSite.js';
import getVisits from '../shared/metriks/getVisits.js';
import { useRoute } from 'vue-router';
import ButtonApp from '../components/ButtonApp.vue';

const route = useRoute();
const apiName = ref([]);
const siteId = route.params.id;
let apiPath = ref([]);
const site = ref([]);
let counterId = ref('');
const dataMetriks = ref([]);

const model = ref({
    isChecked: true,
})

const checkState = async () => {
    try {
        apiName.value.forEach(item => {
            if (model.value[item.api_id].isChecked) {
                const params = {
                    interval: model.value[item.api_id].interval,
                    counterId: counterId,
                };
                console.log(params.interval)

                getVisits(item.url_api, params.counterId, dataMetriks);
                console.log()
            }
        });
    } catch (error) {
        console.log('Ошибка при отправке запроса:', error);
    }
};

onMounted(async () => {
    try {
        await getApi(apiName);
        await getSite(siteId, site);
        console.log(site.value)

        apiName.value.forEach(item => {
            model.value[item.api_id] = {
                isChecked: true,
                interval: 'day',
            };
        });

        apiName.value.forEach(item => {
            apiPath.value.push(item.url_api);
        })

        site.value.forEach(item => {
            counterId = item.counter_id;
        })


    } catch (error) {
        console.log(error)
    }
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