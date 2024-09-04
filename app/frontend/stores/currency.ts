import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCurrencyStore = defineStore('currency', () => {
  const data = ref(null);

  const getInfo = () => {
    axios.get('https://api.moonpay.com/v3/currencies')
    .then((response) => {
      data.value = response.data;
    })
  }

  return { data, getInfo }
})
