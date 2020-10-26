import React, { useState } from "react";
import Styled from "../../sharedStyles/loginViewStyle";
import axios from "axios";
import { useFormik } from "formik";

const SignIn = ({ changeLoginView }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        setError("");
        const res = await axios.post(
          "http://localhost:3001/auth/signIn",
          values
        );
        localStorage.setItem("token", res.data.token);
      } catch (err) {
        setError(err.response.data.message);
      }
    },
  });

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          Be in touch <br /> with your friends
        </Styled.Title>
        <Styled.Subtitle>Sign in to continue</Styled.Subtitle>
      </Styled.Header>
      <Styled.Form onSubmit={formik.handleSubmit}>
        <Styled.InputContainer>
          <Styled.Label
            htmlFor="email"
            error={!!(formik.touched.email && formik.errors.email)}>
            Email
          </Styled.Label>
          <Styled.Input
            type="email"
            id="email"
            name="email"
            error={!!(formik.touched.email && formik.errors.email)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}></Styled.Input>
          {formik.touched.email && formik.errors.email ? (
            <Styled.ErrorMessage>{formik.errors.email}</Styled.ErrorMessage>
          ) : null}
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label
            htmlFor="password"
            error={!!(formik.touched.password && formik.errors.password)}>
            Password
          </Styled.Label>
          <Styled.Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            error={!!(formik.touched.password && formik.errors.password)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}></Styled.Input>
          {formik.touched.password && formik.errors.password ? (
            <Styled.ErrorMessage>{formik.errors.password}</Styled.ErrorMessage>
          ) : null}
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
        {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
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
