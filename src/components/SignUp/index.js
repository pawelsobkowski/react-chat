import React from "react";
import Styled from "./style";

const SignUp = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          Be in touch <br /> with your friends
        </Styled.Title>
        <Styled.Subtitle>Create free account today</Styled.Subtitle>
      </Styled.Header>
      <Styled.Form>
        <Styled.InputContainer>
          <Styled.Label htmlFor="fullName">Full name</Styled.Label>
          <Styled.Input
            type="text"
            id="fullName"
            name="fullName"></Styled.Input>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="email">Email</Styled.Label>
          <Styled.Input type="email" id="email" name="email"></Styled.Input>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="password">Password</Styled.Label>
          <Styled.Input
            type="password"
            id="password"
            name="password"></Styled.Input>
        </Styled.InputContainer>
        <Styled.Button type="submit">Sign up</Styled.Button>
        <Styled.Button type="submit" buttonType={"Google"}>
          <Styled.GoogleIcon />
          Sign up with Google
        </Styled.Button>
      </Styled.Form>
      <p>
        I'm already a member,
        <Styled.Link href="//#endregion">
          <strong> sign in</strong>
        </Styled.Link>
      </p>
    </Styled.Container>
  );
};

export default SignUp;
