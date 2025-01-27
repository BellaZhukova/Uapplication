<template>
    <div class="container">
        <div class="main">
            <div class="main__content">
                <div class="search">
                    <p class="search__title">Выберите сайт, с которым хотите работать</p>
                    <div class="search__block">
                        <input class="search__input">
                        <button class="search__button">Найти</button>
                    </div>
                </div>
                <div class="sites">
                    <router-link to="/report" class="sites__item" v-for="index in sites" :key="index.id">
                        <p class="sites__name">{{ index.name_site }}</p>
                        <p class="sites__url">{{ index.url_site }}</p>
                        <router-link>
                            <button class="sites__button">Редактировать</button>
                        </router-link>
                    </router-link>
                </div>
                <div class="main__next">
                    <router-link to="/service">
                        <ButtonApp>Добавить</ButtonApp>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonApp from "./../components/ButtonApp.vue"
import { onMounted, ref } from "vue";
import getSite from "../shared/api/getSite";
const sites = ref([]);

onMounted(() => {
    getSite(sites);
})

</script>


<style lang="scss">
@use "../assets/scss/variables.scss" as *;
.main {
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .search {

        &__title {
            font-size: $font-size-meduim;
        }
        &__input {
            max-width: 1300px;
            width: 100%;
            height: 40px;
            padding: 0 10px;
            outline: none;
            font-size: $font-size-meduim;
        }
    }
    .sites {
        display: flex;
        flex-direction: column;

        &__item {
            display: flex;
        }

        &__name {
            width: 300px;
            border: 1px solid black;
            text-align: center;
        }
        
        &__url {
            width: 350px;
            border: 1px solid black;
            text-align: center;
        }
    }
}
</style>