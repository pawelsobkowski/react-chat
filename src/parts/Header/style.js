import styled from "styled-components";
import COLORS from "../../colors";
import { Search as Icon } from "react-feather";

const Header = styled.div`
  width: 100%;
  background: ${COLORS.backgroundColor};
  padding: 0.5em 1em;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TopSection = styled.div`
  width: 100%;
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
  margin: 0 0 0.25em 0;
`;

const SearchBar = styled.div`
  width: 100%;
  position: relative;
`;

const Search = styled.input`
  width: 100%;
  border: none;
  padding: 0.55em 0.25em 0.5em 2em;
  border-radius: 0.75em;
  background-color: ${COLORS.transparentSearchBgColor};
  color: ${COLORS.black087};
`;

const SearchIcon = styled(Icon)`
  width: 16px;
  position: absolute;
  top: 2px;
  left: 6px;
  stroke: ${COLORS.black063};
`;

const Styled = {
  Header,
  TopSection,
  Title,
  SearchBar,
  Search,
  SearchIcon,
};

export default Styled;
