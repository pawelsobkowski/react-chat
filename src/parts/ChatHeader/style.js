import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
