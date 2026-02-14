import mongoose from 'mongoose'
const { Schema } = mongoose

// const scoreSchema = new Schema({
//   level: 'number',
//   money: 'number',
//   jank: 'number',
//   cred: 'number',
// })

const gearSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  cool_level: { type: Number, required: true, default: 4 },
  stockedBy: [{ type: Number }],
})

const playerStatusSchema = new mongoose.Schema({
  level: { type: Number, default: 1 },
  money: { type: Number, default: 1000 },
  jank: { type: Number, default: 5 },
  cred: { type: Number, default: 10 },
  gear: [gearSchema],
})

const userSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: false, unique: true },
    status: playerStatusSchema,
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', userSchema)

export default User
