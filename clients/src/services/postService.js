import { getPosts, getPostById, createPost, updatePost, comment } from 'api/api'

const getAllPost = async () => {
  try {
    const res = await getPosts()
    return res.data || {}
  } catch (error) {
    throw error
  }
}

const getPostDetail = async (postId) => {
  try {
    const res = await getPostById(postId)
    return res.data || {}
  } catch (error) {
    throw error
  }
}

const createNewPost = async (data) => {
  try {
    const res = await createPost(data)
    return res.data || {}
  } catch (error) {
    throw error
  }
}

const postUpdate = async (data) => {
  try {
    const res = await updatePost(data)
    return res.data || {}
  } catch (error) {
    throw error
  }
}

const commentPost = async (data) => {
  try {
    const res = await comment(data)
    return res.data || {}
  } catch (error) {
    throw error
  }
}

export { getAllPost, getPostDetail, createNewPost, postUpdate, commentPost }
