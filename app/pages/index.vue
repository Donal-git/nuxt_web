<template>
    <div>
        <Login />
    </div>
   
    <div>
        <Cart />
    </div>

    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>Compteur : {{ counter.count }}</h1>
        <button @click="counter.increment">+1</button>
    </div>
</template>




<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
const counter = useCounterStore()
</script>

