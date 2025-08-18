<!-- <template>
  <div class="container">
    <div class="card">
      <div class="avatar">{{ initials }}</div>

      <h1 class="title">Bienvenue, {{ userStore.nom }} 👋</h1>
      <p class="subtitle">
        Vous êtes connecté avec l'email <strong>{{ userStore.email }}</strong>
      </p>

      <button class="logout-btn" @click="logout">Se déconnecter</button>
    </div>
  </div>
</template>

<script setup>

import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const initials = computed(() => {
  return userStore.nom
    .split(' ')
    .map(part => part[0])
    .join('')
})

const logout = () => {
  alert('Déconnexion réussie')
}
</script> -->

<template>
  <div class="container">
    <div class="card">
      <div class="avatar">{{ initials }}</div>

      <h1 class="title">Bienvenue, {{ userStore.nom }} 👋</h1>
      <p class="subtitle">
        Vous êtes connecté avec l'email <strong>{{ userStore.email }}</strong>
      </p>

      <button class="logout-btn" @click="logout">Se déconnecter</button>
    </div>
  </div>
</template>

<script setup>
// On importe la fonction `computed` de Vue. `computed` permet de créer des propriétés dérivées (calculées) 
// basées sur des données réactives.
import { computed } from 'vue'

// On importe notre store Pinia défini dans `stores/user.ts`. Ce store gère l’état de l’utilisateur (nom, email).
import { useUserStore } from '~/stores/user'

// On initialise une instance du store utilisateur.
// `userStore` donne accès à `state` (nom, email) et aux `actions` (setUser, clearUser).
const userStore = useUserStore()

// On définit une propriété calculée `initials`. Son rôle est de générer les initiales du nom de l’utilisateur.
// Exemple : "Jean Dupont" => "JD"
const initials = computed(() => {
  // Si aucun nom n’est défini, on retourne une chaîne vide.
  if (!userStore.nom) return ''

  // Sinon, on découpe le nom par espace (ex: "Jean Dupont" -> ["Jean", "Dupont"]), on prend la première lettre de chaque partie (ex: "J" et "D"), on met ces lettres en majuscule, puis on les concatène pour obtenir les initiales ("JD").
  return userStore.nom
    .split(' ')
    .map(part => part[0]?.toUpperCase()) // `?.` évite une erreur si `part` est vide
    .join('')
})

// On définit une fonction `logout` qui déconnecte l’utilisateur. Elle appelle l’action `clearUser` du store pour vider le nom et l’email, puis affiche une alerte de confirmation.
const logout = () => {
  userStore.clearUser()
  alert('Déconnexion réussie')
}
</script>


<style scoped>
.container {
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.card {
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.avatar {
  width: 5rem;
  height: 5rem;
  background-color: #dbeafe;
  color: #2563eb;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.logout-btn {
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.logout-btn:hover {
  background-color: #dc2626;
}
</style>
