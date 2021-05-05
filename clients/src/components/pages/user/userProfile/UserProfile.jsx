import React, { useState, useCallback } from 'react'
import './UserProfile.css'
import { Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core'
import avatarDefault from 'assets/images/logo.png'
import FormInput from 'components/common/input/FormInput'
import UploadImage from 'components/common/upload/UploadImage'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileAction } from 'redux/actions/userAction'

const useStyles = makeStyles({
  root: {
    maxWidth: 600
  },
  avatar: {
    backgroundColor: '#fff'
  },
  media: {
    height: 140
  }
})

function UserProfile() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userReducers)
  const [userName, setUserName] = useState(userInfo && userInfo.username)
  const [phone, setPhone] = useState(userInfo && userInfo.phone)
  const [avatar, setAvatar] = useState(userInfo && userInfo.avatar)

  // handle update profile
  const handleUpdateProfile = useCallback(() => {
    dispatch(
      updateProfileAction.updateProfileRequest({
        avatar,
        phone,
        username: userName
      })
    )
  }, [userName, phone, avatar, dispatch])

  return (
    <div className="pf__container">
      <Card className={classes.root}>
        <div className="pf__avatar">
          <img src={avatar || avatarDefault} alt="my-avatar" />
          <UploadImage buttonText="Upload avatar" setImage={setAvatar} />
        </div>
        <CardContent>
          <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
            <FormInput
              label="Email"
              type="email"
              name="email"
              defaultValue={userInfo && userInfo.email}
              disabled={true}
            />
            <FormInput label="UserName" type="text" name="userName" defaultValue={userName} setData={setUserName} />
            <FormInput label="Phone" type="phone" name="phone" defaultValue={phone} setData={setPhone} />
          </form>
        </CardContent>
        <CardActions className="pf__actions">
          <Button size="small" variant="contained" color="primary" onClick={handleUpdateProfile}>
            Update profile
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default UserProfile
