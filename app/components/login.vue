<template>
  <div class="container">
    <h2>Connexion</h2>

    <form @submit.prevent="connecter" class="form">
      <div class="form-group">
        <label for="email">Email :</label>
        <input id="email" v-model="email" type="email" placeholder="Votre email" required />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input id="password" v-model="password" type="password" placeholder="Votre mot de passe" required />
      </div>

      <div>
        <p>Nom : {{ userStore.nom }}</p>
        <p>Email : {{ userStore.email }}</p>
      </div>

      <button type="submit">Se connecter</button>

      <p v-if="message"
        :class="['message', success ? 'success' : 'error']">
          {{ message }}
      </p>
      
      <div class="link">
        <span>Pas encore de compte ?</span>
        <NuxtLink to="/inscription">S’inscrire</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const message = ref('')
const success = ref(false)

import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

async function connecter() {
  message.value = ''
  success.value = false

  if(!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs'
    return
  }

  try {
    const res = await $fetch('/api/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    message.value = res.message
    success.value = res.success

    if(res.success) {
      // Met à jour le store avec les infos reçues
      userStore.setUser(res.utilisateur.nom, res.utilisateur.email)


      setTimeout(() => {
        navigateTo('/pageConnecter')
      }, 2000)
    }
    
  } catch (error) {
  console.error(error)
  message.value = 'Erreur de connexion'
  success.value = false
  }
}
</script> 


<style scoped>
.container {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

input {
  margin-top: 5px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.message {
  margin-top: 10px;
  font-weight: bold;
}
.message.success {
  color: #28a745; /* Vert */
}
.message.error {
  color: #d9534f; /* Rouge */
}

.link {
  margin-top: 20px;
  font-size: 14px;
}

.link a {
  color: #007bff;
  text-decoration: none;
  margin-left: 6px;
}

.link a:hover {
  text-decoration: underline;
}
</style>
