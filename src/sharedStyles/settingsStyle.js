import styled from "styled-components";
import COLORS from "../colors";
import { default as StyledLogin } from "./loginViewStyle";

const { InputContainer, Label, Input, ErrorMessage } = StyledLogin;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.backgroundColor};
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;

const Form = styled.form`
  width: 100%;
  margin: 2em 0;
`;

const ResultMessage = styled.div`
  width: fit-content;
  padding: 1em 2em;
  color: ${COLORS.backgroundColor};
  background-color: ${(props) =>
    props.statusCode === 200 ? COLORS.approveColor : COLORS.error};
  border-radius: 1em;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1.1em;
`;

const Styled = {
  Container,
  Form,
  InputContainer,
  Label,
  Input,
  ErrorMessage,
  ResultMessage,
};

export default Styled;
