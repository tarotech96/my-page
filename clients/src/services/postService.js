import { getPosts, getPostById, createPost } from 'api/api'

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

export { getAllPost, getPostDetail, createNewPost }
