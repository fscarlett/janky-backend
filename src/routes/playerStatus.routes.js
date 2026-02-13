import express from 'express'

import {
  getPlayerStatus,
  getAllPlayerStatus,
  createPlayerStatus,
  updatePlayerStatus,
  deletePlayerStatus,
} from '../controllers/playerStatus.controller.js'

const router = express.Router()

router.get('/', getAllPlayerStatus)
router.get('/:id', getPlayerStatus)
router.post('/', createPlayerStatus)
router.put('/:id', updatePlayerStatus)
router.delete('/:id', deletePlayerStatus)

export default router
