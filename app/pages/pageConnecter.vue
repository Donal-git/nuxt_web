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
