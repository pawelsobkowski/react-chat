import styled from "styled-components";
import { MessageCircle } from "react-feather";
import COLORS from "../../colors";

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ChatPlaceholder = styled.div`
  display: none;
  flex: 3 1 0;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const MessageCircleIcon = styled(MessageCircle)`
  width: 20%;
  height: 20%;
  color: ${COLORS.googleButtonColor};
`;

const Styled = {
  Container,
  ChatPlaceholder,
  MessageCircleIcon,
};

export default Styled;
