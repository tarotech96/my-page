import React, { useState, useEffect } from 'react'
import './Blog.css'
import FormInputTextArea from 'components/common/input/FormInputTextArea'
import { Button } from '@material-ui/core'
import { getPostDetail } from 'services/postService'

function PostDetail() {
  const currentUrl = window.location.href
  const postId = currentUrl.substring(currentUrl.lastIndexOf('/') + 1)
  const [data, setData] = useState({ post: {} })
  const [error, setError] = useState({ message: '', status: false })

  useEffect(() => {
    getPostDetail(postId)
      .then((data) => {
        if (data) {
          setData((prevState) => ({
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
      .finally(() => {})
  }, [postId])
  return (
    <div className="pd__container">
      {error.status && <span>{error.message}</span>}
      <div className="pd__header">
        <h3>{data.post.title}</h3>
        <ul>
          <li>
            <i className="fas fa-user-circle"></i>
            <span>{data.post.author}</span>
          </li>
          <li>
            <i className="far fa-calendar-alt"></i>
            <span> CreatedAt: </span>
          </li>
          <li>
            <i className="fas fa-clock"></i>
            <span>Hours</span>
          </li>
        </ul>
      </div>
      <div className="pd__body">
        <p>{data.post.body}</p>
      </div>
      <div className="pd__reply">
        <h4>Leave a reply</h4>
        <form>
          <FormInputTextArea title="Comment" rowsMin={20} rowsMax={1000} />
          <Button size="large" variant="contained" color="primary">
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  )
}

export default PostDetail
