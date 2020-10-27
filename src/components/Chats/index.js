import React from "react";
import { useHistory } from "react-router-dom";
import Styled from "./style";
import Header from "../../parts/Header";
import Navigation from "../../parts/Navigation";

const Chats = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <Styled.Container>
      <Header title={"Messages"} logout={logout} />
      <Navigation />
    </Styled.Container>
  );
};

export default Chats;
