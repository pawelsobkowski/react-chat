import React, { useState } from "react";
import Styled from "../../sharedStyles/settingsStyle";
import SettingsHeader from "../../parts/SettingsHeader";
import { useFormik } from "formik";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";

const PasswordForm = ({ closeSection }) => {
  const { userId } = parseJwt();
  const [resultMessage, setResultMessage] = useState({
    message: "",
    statusCode: "",
  });

  const validate = (values) => {
    const errors = {};
    if (!values.currentPassword) {
      errors.currentPassword = "Required";
    } else if (values.currentPassword.length < 8) {
      errors.currentPassword = "Must be 8 characters or more";
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
      currentPassword: "",
      password: "",
    },
    enableReinitialize: true,
    validate,
    onSubmit: async (values) => {
      try {
        setResultMessage({
          message: "",
          statusCode: "",
        });
        const res = await axios.put(
          `http://localhost:3001/users/${userId}`,
          values
        );
        setResultMessage({
          message: res.data.message,
          statusCode: res.status,
        });
        setTimeout(
          () =>
            setResultMessage({
              message: "",
              statusCode: "",
            }),
          3000
        );
      } catch (err) {
        setResultMessage({
          message: err.response.data.message,
          statusCode: err.response.status,
        });
        setTimeout(
          () =>
            setResultMessage({
              message: "",
              statusCode: "",
            }),
          3000
        );
      }
    },
  });

  return (
    <Styled.Container>
      <SettingsHeader
        title={"Password"}
        closeSection={closeSection}
        submit={formik.handleSubmit}
      />
      <Styled.Form>
        <Styled.InputContainer>
          <Styled.Label
            htmlFor="currentPassword"
            error={
              !!(
                formik.touched.currentPassword && formik.errors.currentPassword
              )
            }>
            Current password
          </Styled.Label>
          <Styled.Input
            type="password"
            id="currentPassword"
            name="currentPassword"
            error={
              !!(
                formik.touched.currentPassword && formik.errors.currentPassword
              )
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.currentPassword}></Styled.Input>
          {formik.touched.currentPassword && formik.errors.currentPassword ? (
            <Styled.ErrorMessage>
              {formik.errors.currentPassword}
            </Styled.ErrorMessage>
          ) : null}
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label
            htmlFor="password"
            error={!!(formik.touched.password && formik.errors.password)}>
            Password
          </Styled.Label>
          <Styled.Input
            type="password"
            id="password"
            name="password"
            error={!!(formik.touched.password && formik.errors.password)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}></Styled.Input>
          {formik.touched.password && formik.errors.password ? (
            <Styled.ErrorMessage>{formik.errors.password}</Styled.ErrorMessage>
          ) : null}
        </Styled.InputContainer>
        {resultMessage.message && (
          <Styled.ResultMessage statusCode={resultMessage.statusCode}>
            {resultMessage.message}
          </Styled.ResultMessage>
        )}
      </Styled.Form>
    </Styled.Container>
  );
};

export default PasswordForm;
