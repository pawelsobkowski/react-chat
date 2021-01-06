import styled from "styled-components";
import COLORS from "../../colors";
import { ChevronRight, Lock, LogOut, Trash, User } from "react-feather";

const iconSize = 36;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`;

const Header = styled.header`
  width: 100%;
  background: ${COLORS.backgroundColor};
  padding: 0.5em 1em;
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  background-image: linear-gradient(
    270deg,
    ${COLORS.primaryColor} 0%,
    ${COLORS.lightPrimaryColor} 100%
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin: 0;
`;

const Close = styled.a`
  text-decoration: none;
  color: ${COLORS.primaryColor};
  font-weight: 500;
  cursor: pointer;
`;

const Name = styled.p`
  margin: 0.5em 0;
  font-size: 2em;
  font-weight: 500;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.25em 0;
  padding: 0.25em 0.5em;
  border-radius: 2em;
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

const SectionTitle = styled.p`
  color: ${COLORS.black063};
  margin: 0;
  padding: 0.25em 0.5em;
  font-size: 1.25em;
`;

const Option = styled.span`
  font-weight: 500;
  margin-left: 0.75em;
  font-size: 1.25em;
`;

const LogOutIcon = styled(LogOut)`
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${COLORS.backgroundColor};
  border-radius: 100%;
  background-color: ${COLORS.neutralColorIcon};
  padding: 0.25em;
`;

const PersonIcon = styled(User)`
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${COLORS.backgroundColor};
  border-radius: 100%;
  background-color: ${COLORS.accountColorIcon};
  padding: 0.25em;
`;

const LockIcon = styled(Lock)`
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${COLORS.backgroundColor};
  border-radius: 100%;
  background-color: ${COLORS.accountColorIcon};
  padding: 0.25em;
`;

const DeleteIcon = styled(Trash)`
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${COLORS.backgroundColor};
  border-radius: 100%;
  background-color: ${COLORS.deleteColorIcon};
  padding: 0.25em;
`;

const ChevronRightIcon = styled(ChevronRight)`
  margin-left: auto;
`;

const Styled = {
  Container,
  Header,
  Title,
  Close,
  Name,
  List,
  ListElement,
  Option,
  SectionTitle,
  LogOutIcon,
  PersonIcon,
  LockIcon,
  DeleteIcon,
  ChevronRightIcon,
};

export default Styled;
