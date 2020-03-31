import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  PageLayouts,
  Input,
  PasswordInput,
  Button,
  Spinner
} from "../components/common";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  border: 1px solid ${p => p.theme.BASE2};
  padding: 16px;
  color: black;
  border-radius: 4px;
  background: ${p => p.theme.BASE2};

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: ""
  });
  const [loding, setLoding] = useState(false);

  const { username, password } = formFields;
  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormFields(formFields => ({
      ...formFields,
      [name]: value
    }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    setLoding(true);
    timeout = setTimeout(() => {
      setLoding(false);
    }, 2000);
  };
  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);
  return (
    <PageLayouts>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loding ? (
          <Spinner />
        ) : (
          <>
            <Input
              onChange={handleChange}
              name="username"
              value={username}
              type="text"
              placeholder="Username"
              autoComplete="off"
            />
            <PasswordInput
              onChange={handleChange}
              name="password"
              value={password}
            />
          </>
        )}
        <Button type="submit" large disabled={loding}>
        {loding ? "Loding..." : "Login"}
        </Button>
        {!loding && (
          <>
            <div className="alt-text">or</div>
            <Button type="button" secondary>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayouts>
  );
}
