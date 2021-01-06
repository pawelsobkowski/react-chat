import React, { useState } from "react";
import ChatRoom from "../ChatRoom";
import Chats from "../Chats";
import Styled from "./style";

const Dashboard = () => {
  const [userToChat, setUserToChat] = useState(null);
  console.log(userToChat);
  return (
    <Styled.Container>
      <Chats setUserToChat={(id) => setUserToChat(id)} />
      {userToChat ? (
        <ChatRoom userToChat={userToChat} />
      ) : (
        <Styled.MessageCircleIcon />
      )}
    </Styled.Container>
  );
};

export default Dashboard;
