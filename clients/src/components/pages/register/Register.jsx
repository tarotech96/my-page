import React, { useState, useCallback } from 'react'
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core'
import FormInput from 'components/common/input/FormInput'
import { registerUser } from 'services/userService'
import { useHistory } from 'react-router-dom'

function Register() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ message: '', status: false })

  // Handle register
  const handleRegister = useCallback(() => {
    registerUser({ email, password })
      .then((data) => {
        if (data.user) {
          history.push('/login')
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
  }, [email, password, history])

  return (
    <div className="register login">
      {error.status && <span>{error.message}</span>}
      <Card>
        <CardHeader title="Register" />
        <CardContent>
          <form noValidate autoComplete="off">
            <FormInput label="Email" name="email" setData={setEmail} />
            <FormInput label="Password" name="password" setData={setPassword} type="password" />
          </form>
        </CardContent>
        <CardActions>
          <Button color="primary" size="large" onClick={handleRegister}>
            Register
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Register
