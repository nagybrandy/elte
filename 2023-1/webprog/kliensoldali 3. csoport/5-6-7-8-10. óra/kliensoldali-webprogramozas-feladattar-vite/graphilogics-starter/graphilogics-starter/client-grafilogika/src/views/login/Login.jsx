import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLoginMutation, useNewUserMutation } from "../../store/nonogramSlice/nonogramApiSlice";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newUser, {status}] = useNewUserMutation();
  const [login, answer2] = useLoginMutation();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    newUser({
            "email": email,
            "password": password
    })
  }
  console.log(answer2)
  const handleLogin = (e)=> {
    e.preventDefault();
    login({
        "strategy": "local",
        "email": email,
        "password": password
      })
  }
  if(answer2.status === "fulfilled"){
    console.log(answer2.data.accessToken)
    return <h1>Sikeres bejelentkezés</h1>
  }
  return (
    <div className="Login">
        {status === "fulfilled" ? <h1>Sikeres Regisztráció</h1> : ""}
        {answer2.status === "rejected" ? <h1>Sikertelen bejelentkezés</h1> : ""}
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </div>
  );
}

