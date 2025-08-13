
<script setup>
import { onMounted } from 'vue'
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

onMounted(() => {
  SwaggerUI({
    dom_id: '#swagger',
    url: '/api/swagger.json',

   // https://projectwise.onrender.com/api-docs/#/
  })
})
</script>

<template>
  <div id="swagger" style="margin: 20px"></div>
</template>