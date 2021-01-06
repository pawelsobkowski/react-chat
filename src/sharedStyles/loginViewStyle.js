import styled from "styled-components";
import COLORS from "../colors";
import { ReactComponent as Icon } from "../images/google.svg";
import { Eye, EyeOff } from "react-feather";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.backgroundColor};

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const Header = styled.header`
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const Subtitle = styled.h3`
  align-self: flex-start;
  color: ${COLORS.black063};
  margin-top: 0.5em;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 1em 0;
  text-align: end;
`;

const Label = styled.label`
  padding: 0 0.5em;
  text-align: center;
  position: absolute;
  top: -8px;
  left: 16px;
  background-color: ${COLORS.backgroundColor};
  font-size: 0.875em;
  color: ${(props) =>
    props.error === true ? COLORS.error : COLORS.labelColor};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid
    ${(props) => (props.error === true ? COLORS.error : COLORS.borderColor)};
  border-radius: 0.625em;
  padding-left: 1em;
  &:focus {
    border: 2px solid ${COLORS.primaryColor};
    outline: 1px solid ${COLORS.backgroundColor};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 0.25em 0;
  background-color: ${(props) =>
    props.buttonType ? COLORS.googleButtonColor : COLORS.primaryColor};
  border: none;
  border-radius: 0.625em;
  color: ${COLORS.backgroundColor};
  font-size: 1em;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.25s ease;
  cursor: pointer;
  &:first-of-type {
    margin-top: 1.5em;
  }
  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

const GoogleIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
`;

const EyeIcon = styled(Eye)`
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
`;

const EyeOffIcon = styled(EyeOff)`
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
`;

const Link = styled.a`
  color: ${COLORS.primaryColor};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;
  &:focus,
  &:hover {
    color: ${COLORS.lightPrimaryColor};
  }
`;

const PasswordRecovery = styled.a`
  font-size: 0.75em;
  font-weight: 500;
  color: ${COLORS.black063};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;
  &:focus,
  &:hover {
    color: ${COLORS.lightPrimaryColor};
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.9em;
  color: ${COLORS.error};
  margin-top: 0.25em;
  margin-bottom: 0;
`;

const Styled = {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  InputContainer,
  Label,
  Input,
  Button,
  GoogleIcon,
  EyeIcon,
  EyeOffIcon,
  Link,
  PasswordRecovery,
  ErrorMessage,
};

export default Styled;
