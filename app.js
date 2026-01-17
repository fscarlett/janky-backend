import express from 'express'
import dotenv from 'dotenv'
// import { connectDB } from './config/db.js'

// import userRoutes from './routes/user.routes.js'
// import gearRoutes from './routes/gear.routes.js'

dotenv.config()

// connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send(
    '<p style="text-align: center; background:#add; padding: 20px;">Janky API is running</p>',
  )
})

// app.use('/api/v1/userRoutes', userRoutes)
// app.use('/api/v1/gearRoutes', gearRoutes)

app.listen(PORT, () => {
  // connectDB()
  console.log(`🖥️ Server is running on port ${PORT}`)
})
