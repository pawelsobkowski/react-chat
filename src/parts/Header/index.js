import React, { useEffect, useState } from "react";
import Styled from "./style";
import Search from "../Search";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";

const Header = ({ title, logout }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { userId } = parseJwt();

  const search = async (value) => {
    const res = await axios.post(`http://localhost:3001/searchUsers`, {
      searchValue: value,
      userId,
    });
    setSearchResults(res.data);
  };

  return (
    <Styled.Header>
      <Styled.TopSection>
        <Styled.Title>{title}</Styled.Title>
        <button onClick={logout}>Logout</button>
      </Styled.TopSection>
      <Styled.SearchBar isSearchActive={isSearchActive}>
        <Styled.SearchIcon />
        <Styled.Search
          type="search"
          placeholder="Search"
          isSearchActive={isSearchActive}
          onClick={() => setIsSearchActive(true)}
          onChange={(e) => search(e.currentTarget.value)}
        />
        {isSearchActive && (
          <Styled.CancelButton onClick={() => setIsSearchActive(false)}>
            Cancel
          </Styled.CancelButton>
        )}
      </Styled.SearchBar>
      {isSearchActive && <Search results={searchResults} />}
    </Styled.Header>
  );
};

export default Header;
