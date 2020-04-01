import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  PageLayouts,
  Input,
  PasswordInput,
  Button
} from "../components/common";

import { googleSignInStart } from "../redux/user/user.actions";

const Form = styled.form`
  width: 80%;
  height: 65%;
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

const Login = ({googleSignInStart}) => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: ""
  });
  const [loding, setLoding] = useState(false);

  const { email, password } = formFields;

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
        <h1>Login</h1>
            <Input
              onChange={handleChange}
              name="email"
              value={email}
              type="text"
              placeholder="Email"
              autoComplete="off"
            />
            <PasswordInput
              onChange={handleChange}
              name="password"
              value={password}
            />
        <Button type="submit" large disabled={loding}>
          {loding ? "Loding..." : "ログイン"}
        </Button>
        {!loding && (
          <>
            <div className="alt-text">または</div>
            <Button onClick={googleSignInStart} type="button" secondary>
              Googleでログイン
            </Button>
            <StyledLink to="/register">アカウント作成</StyledLink>
          </>
        )}
      </Form>
    </PageLayouts>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(Login);
