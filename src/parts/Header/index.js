import React from "react";
import Styled from "./style";

const Header = ({ title, logout }) => {
  return (
    <Styled.Header>
      <Styled.TopSection>
        <Styled.Title>{title}</Styled.Title>
        <button onClick={logout}>Logout</button>
      </Styled.TopSection>
      <Styled.SearchBar>
        <Styled.SearchIcon />
        <Styled.Search type="search" placeholder="Search" />
      </Styled.SearchBar>
    </Styled.Header>
  );
};

export default Header;
