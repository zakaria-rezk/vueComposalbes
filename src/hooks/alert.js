import {ref} from 'vue'

export default function usealert(){
    const alertIsVisible = ref(false);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }
     return {
        alertIsVisible,
        showAlert,
        hideAlert
     }
}