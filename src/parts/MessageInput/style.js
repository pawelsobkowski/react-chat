import styled from "styled-components";
import COLORS from "../../colors";

const Container = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0.5em;
  backdrop-filter: blur(5px);
  background-color: ${COLORS.transparentBgColor};
`;

const Input = styled.input`
  width: 100%;
  height: 38px;
  border: 1px solid ${COLORS.black063};
  border-radius: 2em;
  background-color: ${COLORS.transparentBgColor};
  padding: 0.5em 2.5em 0.5em 1em;
  font-size: 1em;
  outline: none;
  &:focus {
    border-color: ${COLORS.primaryColor};
  }
`;

const SendButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: 2em;
  background-color: ${COLORS.primaryColor};
  color: ${COLORS.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Styled = {
  Container,
  Input,
  SendButton,
};

export default Styled;
