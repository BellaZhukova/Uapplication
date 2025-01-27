<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup></script>

<style lang="scss">
@use '../assets/scss/variables.scss' as *;
.button {
    padding: 12px 45px;
    background-color: var(--background-main);
    font-size: $font-size-normal;
}
</style>