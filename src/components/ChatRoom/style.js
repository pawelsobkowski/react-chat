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
  overflow: hidden;
  position: absolute;
  background-color: ${COLORS.backgroundColor};
  z-index: 5;

  @media (min-width: 1024px) {
    flex: 3 1 0;
    position: relative;
  }
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 3em 1em 4em 1em;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ListElement = styled.li`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isUserMessage ? "row-reverse" : "row")};
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const Message = styled.div`
  width: fit-content;
  padding: 0.5em 1em;
  background-color: ${(props) =>
    props.isUserMessage ? COLORS.primaryColor : COLORS.googleButtonColor};
  color: ${(props) =>
    props.isUserMessage ? COLORS.backgroundColor : COLORS.black087};
  border-radius: 1em;
  margin: 0.25em 0;
`;

const MessageContent = styled.span``;

const Styled = {
  Container,
  List,
  ListElement,
  Message,
  MessageContent,
};

export default Styled;
