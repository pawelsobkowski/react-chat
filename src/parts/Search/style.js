import styled from "styled-components";
import COLORS from "../../colors";

const SearchContainer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${COLORS.backgroundColor};
  z-index: 2;
  padding: 3em 1em 0 1em;
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0.5em 0;
  display: flex;
  flex-direction: column;
`;

const ListElement = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Name = styled.span`
  margin-left: 1em;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: auto;
  color: ${COLORS.black063};
  cursor: pointer;
`;

const Styled = {
  SearchContainer,
  List,
  ListElement,
  Name,
  Button,
};

export default Styled;
