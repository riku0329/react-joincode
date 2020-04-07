import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { signUpStart } from "../redux/user/user.actions";

import { PageLayouts, Input, Button } from "../components/common";
import { isValidImage, isValidUrl, sameAs } from "../utils/valid";

const Form = styled.form`
  width: 80%;
  height: 90%;
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

const FormError = styled.div`
  color: red;
`;

const Register = ({ signUpStart }) => {
  const { register, handleSubmit, errors, getValues } = useForm({
    defaultValues: {
      photoURL:
        "https://i.pinimg.com/originals/51/83/ef/5183ef65b82a66cf573f324e59cf028b.png"
    }
  });


  const onSubmit = data => {

    signUpStart(data);
  };

  return (
    <PageLayouts>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <Input
          ref={register({ required: true, minLength: 2 })}
          name="displayName"
          type="text"
          placeholder="Display Name"
          autoComplete="off"
        />
        {errors.displayName && (
          <FormError>DisplayNameを2文字以上で入力してください</FormError>
        )}
        <Input
          ref={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        {errors.email && <FormError>Emailを入力してください</FormError>}
        <Input
          ref={register({
            validate: { isValidImage, isValidUrl }
          })}
          name="photoURL"
          type="text"
          placeholder="Photo"
          autoComplete="off"
        />
        {errors.photoURL && <FormError>写真を送信する</FormError>}
        <Input
          ref={register({
            required: true,
            minLength: 6
          })}
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        {errors.password && (
          <FormError>パスワードは6文字以上で入力してください</FormError>
        )}

        <Input
          ref={register({
            required: true,
            minLength: 6,
            validate: { sameAs: sameAs(getValues, "password") }
          })}
          name="confirmPassword"
          type="password"
          placeholder="ConfirmPassword"
          autoComplete="off"
        />
        {errors.confirmPassword && (
          <FormError>パスワードは6文字以上で入力してください</FormError>
        )}
        <Button type="submit" large>
          新規登録
        </Button>
        <div className="alt-text">または</div>
        <Button type="button" secondary>
          Googleでログイン
        </Button>
        <StyledLink to="/login">ログイン</StyledLink>
      </Form>
    </PageLayouts>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: formFields => dispatch(signUpStart(formFields))
});

export default connect(null, mapDispatchToProps)(Register);
