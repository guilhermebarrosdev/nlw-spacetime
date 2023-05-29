import 'dotenv/config'

import fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(require('@fastify/multipart'))

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true, // Recomendado por apenas URLS especificas
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on  http://localhost:3333')
  })
