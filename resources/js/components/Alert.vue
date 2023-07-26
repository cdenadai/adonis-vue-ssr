<script setup>
import { useAlertStore } from "../stores/AlertStore";
const alertStore = useAlertStore();

const colors = {
  primary: "bg-blue-100",
  success: "bg-green-100",
  error: "bg-red-100",
  warning: "bg-yellow-300",
};
</script>

<template>
  <Transition>
    <div
      v-show="alertStore.show"
      id="toast-top-right"
      class="flex absolute top-20 right-3 items-center p-4 space-x-4 w-full max-w-xs text-gray-500 rounded-sm divide-x bg-white divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
      role="alert"
      :class="colors[alertStore.state.type]"
    >
      <div class="text-sm font-normal">{{ alertStore.state.message }}</div>
    </div>
  </Transition>
</template>

<style>
.v-enter-active {
  transition: opacity 0.3s ease;
}

.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
