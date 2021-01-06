import React, { useState } from "react";
import ChatRoom from "../ChatRoom";
import Chats from "../Chats";
import Styled from "./style";
import Contacts from "../Contacts";
import Profile from "../Profile";

const Dashboard = () => {
  const [userToChat, setUserToChat] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [sideView, setSideView] = useState("chats");

  const openChat = (id) => {
    setUserToChat(id);
    setIsActive(true);
  };

  const sideSection = () => {
    switch (sideView) {
      case "chats":
        return (
          <Chats
            openChat={(id) => openChat(id)}
            changeView={(name) => setSideView(name)}
            currentView={sideView}
          />
        );
      case "contacts":
        return (
          <Contacts
            changeView={(name) => setSideView(name)}
            currentView={sideView}
          />
        );
      case "profile":
        return <Profile changeView={(name) => setSideView(name)} />;
      default:
        return "";
    }
  };

  return (
    <Styled.Container>
      <Styled.SideSection>{sideSection()}</Styled.SideSection>

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
