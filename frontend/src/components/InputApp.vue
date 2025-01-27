<template>
    <input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup>
const props = defineProps({
    modelValue: String,
})
</script>

<style lang="scss">
@use "../assets/scss/variables.scss" as *;
.input {
    max-width: 300px;
    width: 100%;
    height: 50px;
    background-color: var(--background-main);
    padding: 0 15px;
    outline: none;
    font-size: $font-size-normal;
    border: none;
    flex-shrink: 0;
}
</style>