import React, { useState, useCallback } from 'react'
import '../Blog.css'
import PropTypes from 'prop-types'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { formatDateWithPadding } from 'constants/utilities'
import FormInput from 'components/common/input/FormInput'
import FormInputTextArea from 'components/common/input/FormInputTextArea'
import UploadImage from 'components/common/upload/UploadImage'
import CustomCalendar from 'components/common/calendar/CustomCalendar'
import { createNewPost } from 'services/postService'
import { closeModal } from 'redux/actions/modalAction'

ModalCreatePost.propTypes = {
  isOpen: PropTypes.bool
}

ModalCreatePost.defaultProps = {
  isOPen: false
}

function ModalCreatePost({ isOpen }) {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')
  const [createdAt, setCreatedAt] = useState(formatDateWithPadding(new Date(), 'yyyy-MM-dd'))
  const [image, setImage] = useState('')
  const [error, setError] = useState({ message: '', status: false })

  const onSubmitForm = useCallback(() => {
    const params = {
      title,
      author,
      body,
      createdAt,
      image
    }
    createNewPost(params)
      .then((data) => {
        if (data.status === 1) {
          dispatch(closeModal())
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
  }, [title, author, body, createdAt, image, dispatch])

  return (
    <div className="create-form">
      {error.status && <span>{error.message}</span>}
      <Dialog
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        disableBackdropClick
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Add new post</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
            <FormInput label="Title" name="title" setData={setTitle} />
            <FormInput label="Author" name="author" setData={setAuthor} />
            <FormInputTextArea rowsMin={5} rowsMax={100} label="Body" placeholder="Enter body..." setData={setBody} />
            <UploadImage
              setImage={setImage}
              imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
              buttonText="Upload image"
            />
            <CustomCalendar label="CreatedAt" date={createdAt} setDate={setCreatedAt} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closeModal())} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmitForm} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ModalCreatePost
