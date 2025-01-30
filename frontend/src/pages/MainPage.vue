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
                    <div class="sites__item" v-for="index in sites" :key="index.id">
                        <div @click="router.push(`/report/${index.site_id}`)" class="sites__params">
                            <p class="sites__name">{{ index.name_site }}</p>
                            <p class="sites__url">{{ index.url_site }}</p>
                        </div>
                        <div @click.stop="router.push(`/pattern/${index.site_id}`)">
                            <button class="sites__button">Редактировать</button>
                        </div>
                    </div>
                </div>
                <div class="main__next">
                    <p>Вашего сайта нет в списке?</p>
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
import { useRouter } from "vue-router";
import getSites from "../shared/api/getSites.js";

const router = useRouter();
const sites = ref([]);

onMounted(async () => {
    await getSites(sites);
    console.log(sites);
})

</script>


<style lang="scss">
@use "../assets/scss/variables.scss" as *;
.main {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    justify-content: space-between; 
    height: 90vh;
    padding-top: $padding-top;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 100%;
        flex-grow: 1;
    }

    .search {

        &__title {
            font-size: $font-size-meduim;
        }

        &__block {
            display: flex;
            gap: 20px;
            width: 1420px;
        }

        &__input {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            outline: none;
            font-size: $font-size-meduim;
            box-sizing: border-box;
        }

        &__button {
            max-width: 70px;
            width: 100%;
        }
    }

    .sites {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 600px;
        overflow-y: auto;
        

        &__item {
            display: flex;
            width: 100%;
        }

        &__params {
            display: flex;
            width: 100%;
            cursor: pointer;
        }

        &__name, &__url {
            flex: 1; 
            border: 1px solid black;
            text-align: center;
            padding: 10px;
        }

        &__button {
            width: 200px;
            height: 100%;
        }
    }

    .main__next {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin-top: auto;
        padding-bottom: $padding-top;
    }
}

</style>