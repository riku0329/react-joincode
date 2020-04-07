import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  PageLayouts,
  Input,
  PasswordInput,
  Button
} from "../components/common";

import {
  googleSignInStart,
  emailSignInStart
} from "../redux/user/user.actions";

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

const Login = ({ googleSignInStart, emailSignInStart }) => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: ""
  });

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
    emailSignInStart(email, password);
  };

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
        <Button type="submit" large>
          ログイン
        </Button>
        <div className="alt-text">または</div>
        <Button onClick={googleSignInStart} type="button" secondary>
          Googleでログイン
        </Button>
        <StyledLink to="/register">アカウント作成</StyledLink>
      </Form>
    </PageLayouts>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Login);
