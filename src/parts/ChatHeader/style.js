import styled from "styled-components";
import COLORS from "../../colors";

const Header = styled.header`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  background-color: ${COLORS.transparentBgColor};
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Title = styled.h3`
  margin: 0;
`;

const Styled = {
  Header,
  HeaderButton,
  Title,
};

export default Styled;
