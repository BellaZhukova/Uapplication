<template>
    <div class="container">
        <div class="site">
            <h1 class="site__title">Создание сайта</h1>
            <div class="form">
                <div class="form__item">
                    <p>Введите название сайта</p>
                    <InputApp v-model="nameSite"/>
                </div>
                <div class="form__item">
                    <p>Введите URL сайта</p>
                    <InputApp v-model="urlSite" @input="validateURL"/>
                </div>
            </div>
            {{ message }}
            <div class="site_send">
                <ButtonApp @click="handleCreate(nameSite, urlSite)">Создать</ButtonApp>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ButtonApp from '../components/ButtonApp.vue';
import InputApp from '../components/InputApp.vue';
import createSite from '../shared/api/createSite';
import getCounters from '../shared/metriks/getCounters';
import updateAccountSiteId from '../shared/api/updateAccountSIteId';
import { useRouter } from 'vue-router';

const router = useRouter();
const nameSite = ref('');
const urlSite = ref('');
const counterID = ref('');
const message = ref('');

const counters = ref([]);

const validateURL = () => {
    const regexProtocol = /^https?:\/\//;
    urlSite.value = urlSite.value.replace(regexProtocol, '');

    const regexSlash = /\/$/;
    urlSite.value = urlSite.value.replace(regexSlash, '');
};

const handleCreate = async (nameSite, urlSite) => {
    try {
        console.log(counters.value);
        counters.value.forEach(item => {
            if (urlSite === item.site) {
                counterID.value = item.id
            }
        })

        if (!nameSite || !urlSite) {
            message.value = 'Пожалуйста, заполните все поля!';
            return;
        }

        let isUrlValid = false;

        for (let item of counters.value) {
            if (urlSite === item.site) {
                isUrlValid = true;
                break;
            } 
        }

        if (!isUrlValid) {
            message.value = 'Такого сайта нет на этом аккаунте!';
            return;
        } else {
            message.value = ''
        }

        const site_id = await createSite(counterID.value, nameSite, urlSite);
        console.log(site_id)
        if (site_id.message === 'Такой сайт уже существует!') {
            console.log('Сайт уже существует!');
            message.value = site_id.message;
            return;  
        }

        await updateAccountSiteId(site_id);

        router.push(`pattern/${site_id}`);
        
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getCounters(counters);
})
</script>
<style lang="scss">
@use "../assets/scss/variables.scss" as *;
.site {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    padding-top: $padding-top;

    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__item {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-width: 300px;
        }
    }
}
</style>