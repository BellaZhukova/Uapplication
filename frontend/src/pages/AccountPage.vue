<template>
    <div class="container">
      <div class="account">
        <h1 class="account__title">Авторизация в Яндекс Метрике</h1>
          <div class="form">
            <div class="form__item">
                <p>Введите логин</p>
                <InputApp v-model="login"/>
            </div>
            <div class="form__item">
                <p>Введите clientID</p>
                <div class="form__button">
                    <InputApp v-model="clientID"/>
                    <ButtonApp @click="getClientID">Получить</ButtonApp>
                </div>
            </div>
            <div class="form__item">
                <p>Введите токен</p>
                <div class="form__button">
                    <InputApp v-model="tokenAuth" />
                    <ButtonApp @click="getToken">Получить</ButtonApp>
                </div>
            </div>
          </div>
          <p>{{ message }}</p>
          <p>{{ siteId }}</p>
          <div>
            <ButtonApp @click="handleCreate(serviceID, login, tokenAuth)">Продолжить</ButtonApp>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import createAccount from '../shared/api/createAccount.js';
  import getCounters from '../shared/metriks/getCounters.js';
  import InputApp from '../components/InputApp.vue';
  import ButtonApp from '../components/ButtonApp.vue';

  const router = useRouter();
  
  const clientID = ref('');
  const tokenAuth = ref('');
  const login = ref('');
  const serviceID = localStorage.getItem('id');
  const counters = ref([]);
  const counterID = ref('');
  let message = ref('');

  const getClientID = () => {
    const url = 'https://oauth.yandex.ru';
    window.open(url, '_blank', 'width=800,height=800');
  }
  
  const getToken = () => {
    console.log(clientID.value)
    const url = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clientID.value}`;
    window.open(url, '_blank', 'width=800,height=800');
  };


  const handleCreate = async (serviceID, login, tokenAuth) => {

    if (!login || !tokenAuth) {
        message.value = 'Пожалуйста, заполните все поля!';
        return;
    }

    localStorage.setItem('token', tokenAuth)

    await getCounters(counters);

    console.log(login)

    let isLoginValid = false;
    
    for (let item of counters.value) {
      if (login === item.owner_login) {
        isLoginValid = true;
        break;
      }
    }

    if (!isLoginValid) {
        message.value = 'Неверный логин!';
        return;
    } else {
        message.value = '';
    }

    const siteId = await createAccount(serviceID, login, tokenAuth);
    if (siteId.message && siteId.message === 'Такой аккаунт уже существует!') {
            console.log('Аккаунт уже существует!');
            message.value = siteId.message;
            return;  
        }
    router.push('/create-site');
  }
  
  </script>
  
  <style lang="scss">
  @use "../assets/scss/variables.scss" as *;
  
  .account {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding-top: $padding-top;
  
    &__title {
      font-size: $font-size-title;
      padding-bottom: $padding-top;
    }
    
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        &__button {
            display: flex;
            gap: 20px;
            width: 100%;
            flex-shrink: 0;
        }
    }
  }
  </style>
  