import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nom: '',
    email: ''
  }),
  actions: {
    setUser(nom: string, email: string) {
      this.nom = nom
      this.email = email
    },
    clearUser() {
      this.nom = ''
      this.email = ''
    }
  }
})
