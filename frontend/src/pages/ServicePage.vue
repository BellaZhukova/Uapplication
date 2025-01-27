<template>
    <div class="container">
        <div class="service">
            <h1 class="service__title">Выберите сервис</h1>
            <div class="list">
                <button v-for="service in services" :key="service.id" class="list__item" @click="selectService(service.service_id, service.name_service)">
                    {{service.name_service}}
                </button>
            </div>
            <router-link v-if="selectedServices !==''" to="/account">
                <ButtonApp @click="chooseService(selectedServices)">Далее</ButtonApp>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import getService from "../shared/api/getService.js"
import chooseService from '../shared/api/chooseService.js';
import ButtonApp from '../components/ButtonApp.vue';

const services = ref([]);
const selectedServices = ref('');
const serviceID = ref('');

const selectService = (id, service) => {
    selectedServices.value = service;
    serviceID.value = id;
    console.log(selectedServices.value);
    localStorage.setItem('id', serviceID.value);
}

onMounted(() => {
    getService(services);
})
</script>

<style lang="scss">
    @use "../assets/scss/variables.scss" as *;

    .service {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        &__title {
            font-size: $font-size-title;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 20px;

            &__item {
                width: 300px;
                height: 40px;
            }
        }
    }
</style>