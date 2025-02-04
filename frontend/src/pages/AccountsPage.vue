<template>
    <div class="container">
        <div class="accounts">
            <div class="accounts__content">
                <h1 class="accounts__title">Выберите аккаунт</h1>
                <div class="accounts__items">
                    {{ message }}
                    <div class="accounts__item" v-for="index in accounts" :key="index.id" @click="handleClick(index.account_id, index.token)">
                        <p class="accounts__name">{{ index.login }}</p>
                        <p class="accounts__service">{{ index.service_name }}</p>
                    </div>
                </div>
            </div>
            <router-link class="accounts__add" to="/service">
                <p>Не нашли ваш аккаунт?</p>
                <ButtonApp>Добавить</ButtonApp>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import getDataAccount from '../shared/api/getDataAccount';
import ButtonApp from '../components/ButtonApp.vue';

const router = useRouter();
const accounts = ref([]);
const message = ref('');

const isCheckAccount = () => {
    if (accounts.value.length === 0) {
        message.value = 'Аккаунтов нет.';
    } else {
        message.value = '';
    }
}

const handleClick = (account_id, token) => {
    localStorage.setItem('account_id', account_id);
    localStorage.setItem('token', token);
    router.push('/create-site');
}

onMounted(() => {
    getDataAccount(accounts);
    isCheckAccount();
})

watch(accounts, (newAccounts) => {
    isCheckAccount();
})

</script>

<style lang="scss">
 @use "../assets/scss/variables.scss" as *;
.accounts {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: $padding-top;
    width: 100%;
    padding-bottom: $padding-top;
    height: 90vh;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        width: 100%;
        flex-grow: 1;
        height: 75vh;
    }

    &__items {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    &__item {
        display: flex;
        width: 100%;
        cursor: pointer;
        flex-shrink: 0;
    }

    &__name {
        flex-grow: 1;
        border: 1px solid black;
        text-align: center;
        padding: 10px;
        max-width: 657px;
    }

    &__service {
        flex-grow: 1;
        border: 1px solid black;
        text-align: center;
        padding: 10px;
    }

    &__add {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-decoration: none;
    }
}
</style>