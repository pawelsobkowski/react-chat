import styled from "styled-components";
import COLORS from "../../colors";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  position: relative;
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0.5em 0.5em;
  display: flex;
  flex-direction: column;
`;

const ListElement = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.black087};
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${COLORS.hoverColor};
  }
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
};

export default Styled;
