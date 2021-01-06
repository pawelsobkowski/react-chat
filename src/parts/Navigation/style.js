import styled from "styled-components";
import COLORS from "../../colors";
import { MessageCircle, Users, User } from "react-feather";

const Navigation = styled.nav`
  width: 100%;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.transparentBgColor};
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Element = styled.li`
  cursor: pointer;
`;

const ChatsIcon = styled(MessageCircle)`
  width: 32px;
  height: 32px;
  stroke: ${COLORS.black063};
`;

const PeopleIcon = styled(Users)`
  width: 32px;
  height: 32px;
  stroke: ${COLORS.black063};
`;

const AvatarIcon = styled(User)`
  width: 32px;
  height: 32px;
  stroke: ${COLORS.black063};
`;

const Styled = {
  Navigation,
  List,
  Element,
  ChatsIcon,
  PeopleIcon,
  AvatarIcon,
};

export default Styled;
