import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  PageLayouts,
  Input,
  PasswordInput,
  Button,
  Spinner
} from "../components/common";

const Form = styled.form`
  width: 80%;
  height: 70%;
  max-width: 400px;
  border: 1px solid ${p => p.theme.BASE2};
  padding: 16px;
  color: ${p => p.theme.PRIMARY_TEXT};
  border-radius: 4px;
  background: ${p => p.theme.BASE2};

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${p => p.theme.PRIMARY_TEXT};
`;

let timeout;

export default function Register() {
  const [formFields, setFormFields] = useState({
    username: "",
    email: '',
    password: ""
  });
  const [loding, setLoding] = useState(false);

  const { username, email, password } = formFields;
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
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
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
            <Input
              onChange={handleChange}
              name="email"
              value={email}
              type="email"
              placeholder="Email"
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
          {loding ? "Loding..." : "新規登録"}
        </Button>
        {!loding && (
          <>
            <div className="alt-text">または</div>
            <Button type="button" secondary>
              Googleでログイン
            </Button>
            <StyledLink to="/login">ログイン</StyledLink>
          </>
        )}
      </Form>
    </PageLayouts>
  );
}
