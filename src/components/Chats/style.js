import styled from "styled-components";
import COLORS from "../../colors";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  position: relative;

  @media (min-width: 1024px) {
    width: 35%;
    border-right: 1px solid ${COLORS.borderColor};
  }
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
`;

const ListElement = styled.li`
  width: 100%;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkToChat = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  text-decoration: none;
  color: ${COLORS.black087};
`;

const UserName = styled.span`
  grid-area: name;
  font-weight: 500;
`;

const Message = styled.span`
  grid-area: message;
  color: ${COLORS.black063};
  font-size: 0.9em;
`;

const Timestamp = styled.span`
  grid-area: timestamp;
  color: ${COLORS.black063};
  font-size: 0.9em;
`;

const ChatInfoSection = styled.section`
  width: 100%;
  margin-left: 1em;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  grid-template-areas:
    "name name"
    "message timestamp";
`;

const Styled = {
  Container,
  List,
  ListElement,
  UserName,
  Message,
  Timestamp,
  ChatInfoSection,
  LinkToChat,
};

export default Styled;
