<!-- <template>
  <div class="container">
    

    <form @submit.prevent="inscrire" class="form">
      <h2>Inscription</h2>

      <div class="form-group">
        <label for="nom">Nom :
            <input id="nom" v-model="nom" type="text" placeholder="Votre nom" required />
        </label>
        
      </div>

      <div class="form-group">
        <label for="prenom">Prénom :
            <input id="prenom" v-model="prenom" type="text" placeholder="Votre prénom" required />
        </label>
        
      </div>

      <div class="form-group">
        <label for="email">Email :
            <input id="email" v-model="email" type="email" placeholder="Votre email" required />
        </label>
      </div>

      <div class="form-group">
        <label for="password">Mot de passe :
            <input id="password" v-model="password" type="password" placeholder="Votre mot de passe" required />
        </label>
      </div>
      <button type="submit">S’inscrire</button>

      <p v-if="message"
        :class="['message', success ? 'success' : 'error']">
          {{ message }}
      </p>

      <button type="button" class="vider" @click="viderFormulaire" >Vider le champs</button>

      <div class="link">
        <span>Déjà inscrit ?</span>
        <NuxtLink to="/">Se connecter</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('')
const prenom = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const success = ref(false)

async function inscrire() {
  message.value = ''
  success.value = false

  try {
    const res = await $fetch('/api/register', {
      method: 'POST',
      body: {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password.value,
      },
    })

    message.value = res.message
    success.value = res.success

    if(res.success) {
      viderFormulaire()

      setTimeout(() => {
        navigateTo('/')
      }, 2000)
    }
  } catch (error) {
    console.error(error)
    message.value = 'Erreur lors de l’inscription'
    success.value = false
  }
}

function viderFormulaire() {
  nom.value = ''
  prenom.value = ''
  email.value = ''
  password.value = ''
}
</script> -->


<template>
  <div class="container">
    <form @submit.prevent="inscrire" class="form">
      <h2>Inscription</h2>

      <div class="form-group">
        <label for="nom">Nom :
          <input id="nom" v-model="nom" type="text" placeholder="Votre nom" required />
        </label>
      </div>

      <div class="form-group">
        <label for="prenom">Prénom :
          <input id="prenom" v-model="prenom" type="text" placeholder="Votre prénom" required />
        </label>
      </div>

      <div class="form-group">
        <label for="email">Email :
          <input id="email" v-model="email" type="email" placeholder="Votre email" required />
        </label>
      </div>

      <div class="form-group">
        <label for="password">Mot de passe :
          <input id="password" v-model="password" type="password" placeholder="Votre mot de passe" required />
        </label>
      </div>

      <button type="submit">S’inscrire</button>

      <p v-if="message" :class="['message', success ? 'success' : 'error']">
        {{ message }}
      </p>

      <button type="button" class="vider" @click="viderFormulaire">Vider le champs</button>

      <div class="link">
        <span>Déjà inscrit ?</span>
        <NuxtLink to="/">Se connecter</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const nom = ref('')
const prenom = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const success = ref(false)

async function inscrire() {
  message.value = ''
  success.value = false

  try {
    const res = await axios.post('/api/register', {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      password: password.value
    })

    message.value = res.data.message
    success.value = res.data.success

    if (res.data.success) {
      viderFormulaire()

      setTimeout(() => {
        navigateTo('/')
      }, 2000)
    }
  } catch (error: any) {
    console.error(error)
    message.value = error.response?.data?.message || 'Erreur lors de l’inscription'
    success.value = false
  }
}

function viderFormulaire() {
  nom.value = ''
  prenom.value = ''
  email.value = ''
  password.value = ''
}
</script>


<style scoped>
.container {
  max-width: 500px;
  margin: 60px auto;
  padding: 30px;
  background-color: #fdfdfd;
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
  text-align: left;
}

input {
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 12px;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
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
