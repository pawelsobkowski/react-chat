import React, { useState } from "react";
import Styled from "../../sharedStyles/loginViewStyle";
import { useInputChange } from "../hooks/useInputChange";

const SignIn = ({ changeLoginView }) => {
  const [input, setInputChange] = useInputChange();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          Be in touch <br /> with your friends
        </Styled.Title>
        <Styled.Subtitle>Sign in to continue</Styled.Subtitle>
      </Styled.Header>
      <Styled.Form>
        <Styled.InputContainer>
          <Styled.Label htmlFor="email">Email</Styled.Label>
          <Styled.Input
            type="email"
            id="email"
            name="email"
            onChange={setInputChange}></Styled.Input>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="password">Password</Styled.Label>
          <Styled.Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            onChange={setInputChange}></Styled.Input>
          {isPasswordVisible ? (
            <Styled.EyeIcon
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          ) : (
            <Styled.EyeOffIcon
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          )}

          <Styled.PasswordRecovery href="//#endregion">
            Forget password?
          </Styled.PasswordRecovery>
        </Styled.InputContainer>
        <Styled.Button type="submit">Sign in</Styled.Button>
        <Styled.Button type="submit" buttonType={"Google"}>
          <Styled.GoogleIcon />
          Sign in with Google
        </Styled.Button>
      </Styled.Form>
      <p>
        I'm new user,
        <Styled.Link onClick={changeLoginView}>
          <strong> sign up</strong>
        </Styled.Link>
      </p>
    </Styled.Container>
  );
};

export default SignIn;
