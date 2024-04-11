import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSystemStore = defineStore('system', () => {
  const title = ref('base-vue-boilerplate')
  return {
    title
  }
})
