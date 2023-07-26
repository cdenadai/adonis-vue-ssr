<script setup>
import Alert from '../components/Alert.vue'
import Logo from '../components/icons/Logo.vue'
</script>

<template>

    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#24376f]">

        <div>
            <Logo />
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg ">
            <Alert />
            <slot />

        </div>
    </div>

</template>
