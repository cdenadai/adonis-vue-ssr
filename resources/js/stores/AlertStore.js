import { defineStore } from "pinia";
import { computed, reactive, ref, watch } from "vue";
import { usePage } from '@inertiajs/inertia-vue3';

export const useAlertStore = defineStore('alert', () => {

  const page = usePage();
  const flash = computed(() => page.props.value.flash);

  watch(flash, (alert) => {
    const message = alert?.message || '';
    const type = alert?.type || 'error';
    
    showAlert(message, type);
  })

  const show = ref(false);
  const state = reactive({
    message: '',
    type: ''
  })

  function showAlert(message, type) {
    if(!message) return;

    show.value = true;
    state.message = message;
    state.type = type;

    setTimeout(() => {
      show.value = false;
      state.message = '';
      state.type = 'error';
    }, 5000)
  }

  return {
      show,
      state,
      showAlert
  };
})
