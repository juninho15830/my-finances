import 'dotenv/config'

import fastify from "fastify"
import cors from "@fastify/cors"
import jwt from '@fastify/jwt'  
import { transactionsRoutes } from "./routes/transactions"
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
    origin: true,
})

app.register(jwt, {
    secret: 'spacetime',  // Registre o JWT e passe um secret
})
  
app.register(authRoutes)
app.register(transactionsRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0', // o host é para conexão com o mobile

}).then(() => {
    console.log('😁 HTTP server running on http://localhost:3333')
})
