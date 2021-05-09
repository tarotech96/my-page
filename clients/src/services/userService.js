import { register, downloadFile } from 'api/api'

const registerUser = async (payload) => {
  try {
    const res = await register(payload)
    return res.data || {}
  } catch (error) {
    throw error
  }
}

const downloadCV = async () => {
  try {
    const res = await downloadFile()
    return res.data || {}
  } catch (error) {
    throw error
  }
}

export { registerUser, downloadCV }
