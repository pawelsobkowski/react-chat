import styled from "styled-components";
import COLORS from "../../colors";

const Container = styled.section`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.transparentBgColor};
  box-shadow: 0px 4px 30px -5px ${COLORS.googleButtonColor};
  border-radius: 10px;
`;

const Content = styled.div`
  width: 100%;
  padding: 1.5em 0.5em;
  text-align: center;
  font-size: 1.1em;
`;

const Actions = styled.div`
  width: 100%;
  border-top: 1px solid ${COLORS.borderColor};
`;

const Button = styled.button`
  width: 50%;
  background-color: transparent;
  border: none;
  padding: 0.5em 0.75em;
  font-size: 1em;
  cursor: pointer;
  color: ${COLORS.primaryColor};
  border-bottom-left-radius: 10px;

  &:hover {
    background-color: ${COLORS.hoverColor};
  }

  &:first-child {
    border-right: 1px solid ${COLORS.borderColor};
  }
`;

const ConfirmButton = styled(Button)`
  color: ${COLORS.error};
  border-bottom-right-radius: 10px;
  font-weight: 600;
`;

const Styled = {
  Container,
  Content,
  Actions,
  Button,
  ConfirmButton,
};

export default Styled;
