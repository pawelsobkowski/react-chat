import React, { useState, useEffect } from "react";
import Styled from "../../sharedStyles/settingsStyle";
import SettingsHeader from "../../parts/SettingsHeader";
import { useFormik } from "formik";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";

const fetchUserInfo = async (userId) => {
  const res = await axios.get(`http://localhost:3001/users/${userId}`);
  return { email: res.data.email, fullName: res.data.fullName };
};

const PersonalInfoForm = ({ closeSection }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ email: "", fullName: "" });
  const { userId } = parseJwt();

  useEffect(() => {
    fetchUserInfo(userId).then(setUser);
  }, [userId]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: user.email,
      fullName: user.fullName,
    },
    enableReinitialize: true,
    validate,
    onSubmit: async (values) => {
      try {
        setError("");
        const res = await axios.put(
          `http://localhost:3001/users/${userId}`,
          values
        );
        console.log(res);
      } catch (err) {
        setError(err.response.data.message);
      }
    },
  });

  return (
    <Styled.Container>
      <SettingsHeader
        title={"Personal Info"}
        closeSection={closeSection}
        submit={formik.handleSubmit}
      />
      <Styled.Form>
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
            htmlFor="fullName"
            error={!!(formik.touched.fullName && formik.errors.fullName)}>
            Full name
          </Styled.Label>
          <Styled.Input
            type="text"
            id="fullName"
            name="fullName"
            error={!!(formik.touched.fullName && formik.errors.fullName)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}></Styled.Input>
          {formik.touched.fullName && formik.errors.fullName ? (
            <Styled.ErrorMessage>{formik.errors.fullName}</Styled.ErrorMessage>
          ) : null}
        </Styled.InputContainer>
        {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
      </Styled.Form>
    </Styled.Container>
  );
};

export default PersonalInfoForm;
