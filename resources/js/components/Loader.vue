<script setup>
import { computed } from "vue";
import Loading from "vue-loading-overlay";

const LoaderType = "spinner " | "dots " | "bars";

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    },
    loader: {
        type: String,
        default: "dots",
    },
    color: {
        type: String,
        default: "white",
    },
    height: {
        type: Number,
        default: 10,
    },
});

const isLoadingValue = computed(() => props.isLoading);
</script>

<template>
    <loading
        v-model:active="isLoadingValue"
        :loader="loader"
        :color="color"
        :height="height"
    />
</template>

<style scope>
.vl-icon {
    display: inline-block;
    padding-bottom: 0.25rem;
}
</style>
