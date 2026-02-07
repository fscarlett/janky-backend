import express from 'express'
import { clerkMiddleware } from '@clerk/express'

import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
