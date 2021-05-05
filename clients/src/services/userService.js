import { register } from 'api/api'

const registerUser = async (payload) => {
  try {
    const res = await register(payload)
    return res.data || {}
  } catch (error) {
    throw error
  }
}

export { registerUser }
