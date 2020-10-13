import styled from "styled-components";
import COLORS from "../../colors";
import { ReactComponent as Icon } from "../../images/google.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
`;

const Label = styled.label`
  padding: 0 0.5em;
  text-align: center;
  position: absolute;
  top: -8px;
  left: 16px;
  background-color: ${COLORS.backgroundColor};
  font-size: 0.875em;
  color: ${COLORS.labelColor};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${COLORS.borderColor};
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
  cursor: pointer;
`;

const GoogleIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
`;

const Link = styled.a`
  color: ${COLORS.primaryColor};
  text-decoration: none;
  cursor: pointer;
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
  Link,
};

export default Styled;
