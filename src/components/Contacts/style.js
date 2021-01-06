import styled from "styled-components";
import COLORS from "../../colors";
import { Check, X } from "react-feather";

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

const Section = styled.section`
  width: 100%;
  margin: 0.5em 0;
  padding: 0 1em;
`;

const SectionHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const SectionHeaderTitle = styled.h3`
  margin: 0.25em 0;
  color: ${COLORS.black087};
`;

const AcceptIcon = styled(Check)`
  stroke: ${COLORS.black063};
  margin: 0 0.5em 0 auto;
  cursor: pointer;
`;

const CancelIcon = styled(X)`
  stroke: ${COLORS.black063};
  cursor: pointer;
`;

const Styled = {
  Container,
  List,
  ListElement,
  Name,
  Section,
  SectionHeader,
  SectionHeaderTitle,
  AcceptIcon,
  CancelIcon,
};

export default Styled;
