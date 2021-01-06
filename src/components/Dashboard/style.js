import styled from "styled-components";
import { MessageCircle } from "react-feather";
import COLORS from "../../colors";

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MessageCircleIcon = styled(MessageCircle)`
  width: 20%;
  height: 20%;
  margin: auto;
  color: ${COLORS.googleButtonColor};
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Styled = {
  Container,
  MessageCircleIcon,
};

export default Styled;
