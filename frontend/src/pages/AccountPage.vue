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
            <div class="form__item">
                <p>Введите название сайта</p>
                <InputApp v-model="nameSite"/>
            </div>
            <div class="form__item">
                <p>Введите URL сайта</p>
                <InputApp v-model="urlSite" @input="validateURL"/>
            </div>
          </div>
          <ButtonApp @click="checkSite">Проверка</ButtonApp>
          <p>{{ message }}</p>
          <div v-if="isValidSite === true">
            <ButtonApp @click="handleCreate(serviceID, login, tokenAuth, counterID, nameSite, urlSite)">Продолжить</ButtonApp>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import createData from '../shared/api/createData.js';
  import getCounters from '../shared/metriks/getCounters.js';
  import InputApp from '../components/InputApp.vue';
  import ButtonApp from '../components/ButtonApp.vue';

  const router = useRouter();
  
  const clientID = ref('');
  const tokenAuth = ref('');
  const nameSite = ref('');
  const urlSite = ref('');
  const login = ref('');
  const serviceID = localStorage.getItem('id');
  const counters = ref([]);
  const counterID = ref('');
  let message = ref('');
  let isValidSite = false;
  
  const getClientID = () => {
    const url = 'https://oauth.yandex.ru';
    window.open(url, '_blank', 'width=800,height=800');
  }
  
  const getToken = () => {
    console.log(clientID.value)
    const url = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${clientID.value}`;
    window.open(url, '_blank', 'width=800,height=800');
  };

  const validateURL = () => {
    const regexProtocol = /^https?:\/\//;
    urlSite.value = urlSite.value.replace(regexProtocol, '');

    const regexSlash = /\/$/;
    urlSite.value = urlSite.value.replace(regexSlash, '');
};
  
  const checkSite = async () => {

    if (!login.value || !tokenAuth.value || !nameSite.value || !urlSite.value) {
        message.value = 'Пожалуйста, заполните все поля!';
        isValidSite = false;
        return;
    }

    localStorage.setItem('token', tokenAuth.value)
    await getCounters(counters);
    console.log(counters.value)

    counters.value.forEach(item => {
        if (urlSite.value === item.site & login.value === item.owner_login) {
            isValidSite = true;
            counterID.value = item.id
        }
    })

    if (isValidSite) {
        message.value = "Проверка выполнена успешно!";
    } else {
        message.value = "Ошибка! Повторите попытку снова!";
    }
  }

  const handleCreate = async (serviceID, login, tokenAuth, counterID, nameSite, urlSite) => {
    const siteId = await createData(serviceID, login, tokenAuth, counterID, nameSite, urlSite);
    router.push(`pattern/${siteId}`);
  }
  
  </script>
  
  <style lang="scss">
  @use "../assets/scss/variables.scss" as *;
  
  .account {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    padding-top: $padding-top;
  
    &__title {
      font-size: $font-size-title;
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
  