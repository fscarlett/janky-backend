import express from 'express'

import {
  getPlayerStatus,
  updatePlayerStatus,
  deletePlayerStatus,
} from '../controllers/playerStatus.controller.js'

const router = express.Router()

router.get('/:id', getPlayerStatus)
router.put('/:id', updatePlayerStatus)
router.delete('/:id', deletePlayerStatus)

export default router
