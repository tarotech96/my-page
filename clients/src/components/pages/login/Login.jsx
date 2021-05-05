import React, { useState, useEffect, useCallback } from 'react'
import './Login.css'
import FormInput from 'components/common/input/FormInput'
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { loginAction, clearError } from 'redux/actions/userAction'

function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLogin, userInfo, error } = useSelector((state) => state.userReducers)
  const [errorMessage, setErrorMessage] = useState('')

  // Handle when click login button
  const handleLogin = useCallback(() => {
    dispatch(loginAction.loginRequest({ email, password }))
  }, [email, password, dispatch])

  // If login successfully, redirect to home page
  useEffect(() => {
    if (Object.keys(error).length) {
      setErrorMessage('email or password is incorrect')
    }
    if (isLogin) {
      dispatch(clearError())
      history.push('/')
    }
  }, [isLogin, history, userInfo, error, dispatch])

  return (
    <div className="login">
      {errorMessage && <span>{errorMessage}</span>}
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form noValidate autoComplete="off">
            <FormInput label="Email" name="email" setData={setEmail} />
            <FormInput label="Password" name="password" setData={setPassword} type="password" />
          </form>
        </CardContent>
        <CardActions>
          <Button color="primary" size="large" onClick={handleLogin}>
            Login
          </Button>
          <Link to="/register">Don't Have an Account?</Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login
