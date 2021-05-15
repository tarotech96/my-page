import React, { useState, useEffect, useCallback } from 'react'
import './Blog.css'
import FormInputTextArea from 'components/common/input/FormInputTextArea'
import { Button } from '@material-ui/core'
import { getPostDetail, commentPost } from 'services/postService'
import Loading from 'components/common/loading/Loading'
import { useParams } from 'react-router-dom'

function PostDetail() {
  const { postId } = useParams()
  const [state, setState] = useState({ post: {}, isLoading: false })
  const [comment, setComment] = useState('')
  const [error, setError] = useState({ message: '', status: false })

  useEffect(() => {
    setState((prevState) => ({ ...prevState, isLoading: true }))

    getPostDetail(postId)
      .then((data) => {
        if (data) {
          setState((prevState) => ({
            ...prevState,
            post: data
          }))
        }
      })
      .catch((error) => {
        setError((prevState) => ({
          ...prevState,
          message: error.message,
          status: true
        }))
      })
      .finally(() => {
        setState((prevState) => ({ ...prevState, isLoading: false }))
      })
  }, [postId])

  const handleComment = useCallback(() => {
    commentPost({ postId, comment })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        setError((prevState) => ({
          ...prevState,
          message: error.message,
          status: true
        }))
      })
      .finally(() => {})
  }, [postId, comment])

  const format = (value) => {
    return value < 10 ? `0${value}` : value
  }

  const getHoursAndMinutes = (date) => {
    if (!date) {
      return '00:00'
    }
    const myDate = new Date(date)
    return `${format(myDate.getHours())}:${format(myDate.getMinutes())}`
  }

  return (
    <div className="pd__container">
      {error.status && <span>{error.message}</span>}
      {state.isLoading && <Loading />}
      {Object.keys(state.post).length && (
        <>
          <div className="pd__header">
            <h3>{state.post.title}</h3>
            <ul>
              <li>
                <i className="fas fa-user-circle"></i>
                <span>{state.post.author}</span>
              </li>
              <li>
                <i className="far fa-calendar-alt"></i>
                <span>{state.post.createdAt}</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>{getHoursAndMinutes(state.post.createdAt)}</span>
              </li>
            </ul>
          </div>
          <div className="pd__body">
            <p>{state.post.body}</p>
          </div>
          <div className="pd__reply">
            <h4>Leave a reply</h4>
            <form>
              <FormInputTextArea title="Comment" rowsMin={20} rowsMax={1000} setData={setComment} />
              <Button size="large" variant="contained" color="primary" onClick={handleComment}>
                Post Comment
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default PostDetail
