
import { defineNuxtPlugin } from 'nuxt/app'
import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  return{
    provide: {
      axios: instance
    }
  }
})