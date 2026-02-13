import mongoose from 'mongoose'
import PlayerStatus from '../models/PlayerStatusModel.js'

export const getAllPlayerStatus = async (req, res) => {
  try {
    const playerStatuses = await PlayerStatus.find({})
    res.status(200).json({ success: true, data: playerStatuses })
  } catch (error) {
    console.error('Error in Fetch player statuses.', error.message)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getPlayerStatus = async (req, res) => {
  try {
    const playerStatus = await PlayerStatus.findOne({ userId: req.id })
    if (!playerStatus) {
      return res
        .status(404)
        .json({ success: false, message: 'Player status not found' })
    }
    res.status(200).json({ success: true, data: playerStatus })
  } catch (error) {
    console.error('Error fetching player status:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const createPlayerStatus = async (req, res) => {
  const playerStatus = req.body

  const newPlayerStatus = new PlayerStatus(playerStatus)
  console.log('✨ Creating new playerStatus:', newPlayerStatus)

  try {
    await newPlayerStatus.save()
    console.log('new PlayerStatus created:', newPlayerStatus._id)
    res.status(201).json({ success: true, data: newPlayerStatus })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
    console.error('Error in Create PlayerStatus.', error.message)
  }
}

export const updatePlayerStatus = async (req, res) => {
  const { online, score, gear } = req.body

  try {
    let playerStatus = await PlayerStatus.findOne({ userId: req.id })

    if (!playerStatus) {
      // Create new player status if it doesn't exist
      playerStatus = new PlayerStatus({
        userId: req.id,
        online,
        score,
        gear,
      })
    } else {
      // Update existing player status
      if (online !== undefined) playerStatus.online = online
      if (score) playerStatus.score = score
      if (gear) playerStatus.gear = gear
    }

    await playerStatus.save()
    res.status(200).json({ success: true, data: playerStatus })
  } catch (error) {
    console.error('Error updating player status:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const deletePlayerStatus = async (req, res) => {
  try {
    const playerStatus = await PlayerStatus.findOneAndDelete({ userId: req.id })
    if (!playerStatus) {
      return res
        .status(404)
        .json({ success: false, message: 'Player status not found' })
    }
    res.status(204).json({ success: true, message: 'Player status deleted' })
  } catch (error) {
    console.error('Error deleting player status:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
