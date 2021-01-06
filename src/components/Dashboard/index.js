import React, { useState } from "react";
import ChatRoom from "../ChatRoom";
import Chats from "../Chats";
import Styled from "./style";

const Dashboard = () => {
  const [userToChat, setUserToChat] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const openChat = (id) => {
    setUserToChat(id);
    setIsActive(true);
  };

  return (
    <Styled.Container>
      <Chats openChat={(id) => openChat(id)} />
      {userToChat && isActive ? (
        <ChatRoom
          userToChat={userToChat}
          closeChat={() => setIsActive(false)}
        />
      ) : (
        <Styled.ChatPlaceholder>
          <Styled.MessageCircleIcon />
        </Styled.ChatPlaceholder>
      )}
    </Styled.Container>
  );
};

export default Dashboard;
