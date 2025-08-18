// On importe la fonction `defineStore` depuis Pinia
// Pinia est une librairie de gestion d’état (store) pour Vue/Nuxt,
// qui remplace Vuex.
import { defineStore } from 'pinia'

// On définit un store appelé `user`.
// Ce store sera accessible via la fonction `useUserStore()`.
export const useUserStore = defineStore('user', {
  
  // La partie `state` contient les données (état) du store.
  // Ici, on initialise un objet avec deux propriétés : `nom` et `email`,
  // toutes les deux vides au départ.
  state: () => ({
    nom: '',
    email: ''
  }),

  // La partie `actions` regroupe les fonctions qui permettent
  // de modifier l’état du store.
  actions: {
    // setUser permet de mettre à jour les propriétés `nom` et `email`
    // avec les valeurs passées en paramètres.
    setUser(nom: string, email: string) {
      this.nom = nom
      this.email = email
    },

    // clearUser réinitialise les propriétés `nom` et `email`
    // en leur redonnant une valeur vide.
    clearUser() {
      this.nom = ''
      this.email = ''
    }
  }
})

