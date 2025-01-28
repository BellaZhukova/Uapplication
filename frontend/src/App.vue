<template>
  <Header :site-id="route.params.id"></Header>
  <router-view></router-view>
</template>

<script setup>
import Header from './widgets/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style></style>