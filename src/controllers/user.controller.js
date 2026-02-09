import mongoose from 'mongoose'
import User from '../models/UserModel.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json({ success: true, data: users })
  } catch (error) {
    console.error('Error in Fetch users.', error.message)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getUser = async (req, res) => {
  try {
    // const { userId } = req.auth // Get the authenticated user's ID from Clerk
    const userId = req.id // Get the authenticated user's ID from Clerk
    let user = await User.findOne({ id: userId })

    if (!user) {
      console.log('user not found 🤷‍♀️')
    }
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    console.error('Error fetching user:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const createUser = async (req, res) => {
  const user = req.body

  const newUser = new User(user)
  console.log('Creating new user:', newUser)

  try {
    await newUser.save()
    console.log('new User created:', newUser.username)
    res.status(201).json({ success: true, data: newUser })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
    console.error('Error in Create User.', error.message)
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const user = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Invalid user id' })
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    })
    res.status(200).json({ success: true, data: updatedUser })
    console.log('User updated:', updatedUser.username)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' })
    console.error('Error in Update User.', error.message)
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Invalid user id' })
  }

  try {
    await User.findByIdAndDelete(id)
    res.status(204).json({ success: true, message: 'User deleted' })
    console.log('User deleted:', id)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
    console.error('Error in Delete User.', error.message)
  }
}
