import styled from "styled-components";
import { User as Icon } from "react-feather";
import COLORS from "../../colors";

const avatarSize = 48;

const Img = styled.img`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: 2em;
  margin-right: 1em;
`;

const UserIcon = styled(Icon)`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  stroke: ${COLORS.backgroundColor};
  background-color: ${COLORS.googleButtonColor};
  border-radius: 2em;
  margin-right: 1em;
`;

const Styled = {
  Img,
  UserIcon,
};

export default Styled;
