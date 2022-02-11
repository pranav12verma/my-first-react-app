import axios from "axios";
import { useState } from "react";

import { Button, Form, FormGroup, Input } from "reactstrap";
export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    const isLongEnough = password.length >= 8;
    const hasNoSpace = !password.includes(" ");
    let isValidated = isLongEnough && hasNoSpace;

    if (isValidated) {
      axios
        .post(`https://reqres.in/api/login`, {
          email,
          password,
        })
        .then(({ data }) => {
          onLoginSuccess(data.token);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
        setPasswordError("enter valid password")
        alert("Login Failed!");
    }
  };
  const clearEmail = (event) => {
    event.preventDefault();
    setEmail("");
  };
  const clearPasswprd = (event) => {
    event.preventDefault();
    setPassword("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          bsSize="lg"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearEmail} />
      </FormGroup>
      <FormGroup>
        <Input
          bsSize="lg"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button style={{ margin: "0 5px" }} close onClick={clearPasswprd} />        
      </FormGroup>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "30px",
        }}
      >
        <Button color="danger" outline type="reset">
          Reset
        </Button>
        <Button color="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
