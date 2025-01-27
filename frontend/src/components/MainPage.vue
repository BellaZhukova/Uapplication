<template>
    <div class="container">
        <div class="main__site">
            <h1 class="main__title">Введите URL сайта, с которым хотите работать</h1>
            <div class="main__send">
                <input class="main__input" v-model="model.service">
                <router-link v-if="model.service !== ''" to="/service" @click="setSite">
                    <button class="button">Далее</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const model = ref({
    service: ''
})
const setSite = () => {
    localStorage.setItem('url_site', model.value.service);
}
</script>

<style lang="scss">
@use '../assets/scss/variables.scss' as *;
    .main {

        &__site {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
        }

        &__title {
            color: var(--text-color-dark);
            font-size: $font-size-title;
        }

        &__send {
            display: flex;
            gap: 20px;
        }

        &__input {
            font-family: $font-family;
            width: 400px;
            height: 40px;
            padding: 0 10px;
            font-size: $font-size-meduim;
            outline: none;

            &:hover {
                border: 1px solid var(--main-color);
            }

            &:focus {
                border: 1px solid var(--main-color);
            }
        }
    }
</style>