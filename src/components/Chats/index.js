import React from "react";
import { useHistory } from "react-router-dom";

const Chats = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div>
      <h1>Chats</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Chats;
