import express from 'express'
import { clerkMiddleware } from '@clerk/express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js'

import userRoutes from './src/routes/user.routes.js'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(clerkMiddleware())

app.use('/api/v1/users', userRoutes)

app.get('/', (req, res) => {
  res.send(
    '<p style="text-align: center; background:#add; padding: 20px;">Janky API is running LAMF</p>',
  )
})

app.listen(PORT, () => {
  connectDB()
  console.log(`🖥️ Server is running on port ${PORT}`)
})
