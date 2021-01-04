import styled from "styled-components";
import { User as Icon } from "react-feather";
import COLORS from "../../colors";

const avatarSize = 48;

const Img = styled.img`
  width: ${(props) => (props.size ? `${props.size}px` : `${avatarSize}px`)};
  height: ${(props) => (props.size ? `${props.size}px` : `${avatarSize}px`)};
  border-radius: 100%;
  margin-right: 1em;
`;

const UserIcon = styled(Icon)`
  width: ${(props) => (props.size ? `${props.size}px` : `${avatarSize}px`)};
  height: ${(props) => (props.size ? `${props.size}px` : `${avatarSize}px`)};
  stroke: ${COLORS.backgroundColor};
  background-color: ${COLORS.googleButtonColor};
  border-radius: 100%;
  margin-right: 1em;
`;

const Styled = {
  Img,
  UserIcon,
};

export default Styled;
