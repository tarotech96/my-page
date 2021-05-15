import React, { useState, useEffect } from 'react'
import './Blog.css'
import { Grid, Button } from '@material-ui/core'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import ModalCreatePost from './createPost/ModalCreatePost'
import { getAllPost } from 'services/postService'
import { openModal } from 'redux/actions/modalAction'
import Loading from 'components/common/loading/Loading'

const ADMIN_EMAIL = 'taroinjapan_admin@gmail.com'

function Blog() {
  const dispatch = useDispatch()
  const [state, setState] = useState({ data: [], isLoading: false })
  const [error, setError] = useState({ message: '', status: false })
  const { userInfo } = useSelector((state) => state.userReducers)
  const { isOpen } = useSelector((state) => state.modalReducers)

  //ComponentDidMount
  useEffect(() => {
    setState((prevState) => ({ ...prevState, isLoading: true }))

    getAllPost()
      .then((data) => {
        if (data.data.length) {
          setState((prevState) => ({
            ...prevState,
            data: data.data
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
  }, [dispatch])

  return (
    <div className="bl__container">
      {error.status && <span>{error.message}</span>}
      {state.isLoading && <Loading />}
      <Grid>
        {isOpen && <ModalCreatePost isOpen={isOpen} />}
        <Grid item xs={12} sm={12}>
          <Grid container justify="center">
            {state.data && state.data.length
              ? state.data.map((item, index) => <PostItem key={index} item={item} sttItem={index + 1} />)
              : ''}
          </Grid>
        </Grid>
      </Grid>
      {userInfo && userInfo.email === ADMIN_EMAIL && (
        <Button onClick={() => dispatch(openModal())} className="bl__btn-add">
          <i className="fas fa-plus-circle"></i>
        </Button>
      )}
    </div>
  )
}

export default Blog
