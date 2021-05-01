import React, { useState } from "react";
import "./Login.css";
import FormInput from "components/common/input/FormInput";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as userAction from "redux/actions/userAction.js";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    dispatch(userAction.login.loginRequest({ email, password }));
  }, [email, password, dispatch]);

  return (
    <div className="login">
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form>
            <FormInput label="Email" setData={setEmail} />
            <FormInput label="Password" setData={setPassword} />
          </form>
        </CardContent>
        <CardActions>
          <Button color="primary" size="large" onClick={handleLogin}>
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Login;
