import mongoose from 'mongoose'

// TODO: ADD DEFAULT SCORES
const scoreSchema = new Schema({
  level: 'number',
  money: 'number',
  jank: 'number',
  cred: 'number',
})

const gearSchema = new Schema({
  name: 'string',
  type: 'string',
  image: 'string',
  description: 'string',
  price: 'number',
  cool_level: 'number',
  stockedBy: ['number'],
})

const playerStatusSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    online: { type: Boolean, default: false },
    lastActive: { type: Date, default: Date.now },
    score: scoreSchema,
    gear: [gearSchema],
  },
  {
    timestamps: true,
  },
)

const PlayerStatus = mongoose.model('PlayerStatus', playerStatusSchema)

export default PlayerStatus
