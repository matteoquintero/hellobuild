import express from 'express' 

import userRouter from './routes/users'

const app = express()
app.use(express.json()) // middleware to transform json

const PORT = 3300

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
