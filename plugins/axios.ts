// Importe la fonction `defineNuxtPlugin` de Nuxt
// Elle permet de définir un plugin qui sera chargé automatiquement par Nuxt.
import { defineNuxtPlugin } from 'nuxt/app'

// Importe la librairie `axios` qui sert à faire des requêtes HTTP (GET, POST, PUT, DELETE, etc.).
import axios from 'axios'

// Déclare un plugin Nuxt par défaut avec `defineNuxtPlugin`.
// Ce plugin sera exécuté lors du démarrage de l'application.
export default defineNuxtPlugin(() => {
  
  // Crée une instance personnalisée d'Axios.
  // Ici, on définit des options globales comme l’URL de base et le délai maximum d’attente.
  const instance = axios.create({
    baseURL: '/api',   // Toutes les requêtes HTTP commenceront par "/api"
    timeout: 5000      // Chaque requête expirera si elle prend plus de 5 secondes
  })

  // Retourne un objet contenant ce qu’on veut "injecter" dans Nuxt.
  // Ici, on fournit notre instance Axios sous le nom `$axios`.
  return {
    provide: {
      axios: instance   // Tu pourras utiliser `const {$axios} = useNuxtApp()` dans ton code
    }
  }
})
