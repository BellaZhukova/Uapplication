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
                <div class="sites"></div>
                <div class="seacrh__next">
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

</script>


<style></style>