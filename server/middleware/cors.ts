
export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin')

  const allowedOrigins = [
    'http://localhost:3000',
    'https://projectwise.onrender.com'
  ]

  if (origin && allowedOrigins.includes(origin)) {
    setHeader(event, 'Access-Control-Allow-Origin', origin)
  }

  setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Gérer les requêtes préflight OPTIONS
  if (getMethod(event) === 'OPTIONS') {
    return ''
  }
})
