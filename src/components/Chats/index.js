import React, { useState, useEffect } from "react";
import Styled from "./style";
import Header from "../../parts/Header";
import Navigation from "../../parts/Navigation";
import Avatar from "../../parts/Avatar";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";

const Chats = ({ openChat, changeView, currentView }) => {
  const [chats, setChats] = useState(null);
  const { userId } = parseJwt();

  useEffect(() => {
    const fetchChats = async () => {
      const res = await axios.get(`http://localhost:3001/chat/user/${userId}`);
      const rawChatList = res.data.map((item) => {
        const [person] = item.participants.filter(
          (user) => user._id !== userId
        );
        const [message] = item.messages.slice(-1);

        const timestamp = new Date(message.timestamp);

        message.timestamp = timestamp;

        return {
          id: item._id,
          person,
          message,
        };
      });

      const sortedChatList = rawChatList.sort(
        (a, b) => b.message.timestamp - a.message.timestamp
      );

      const chatList = sortedChatList.map((item) => {
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleDateString("default", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        const messageDate = item.message.timestamp.toLocaleString("default", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

        const messageTime = item.message.timestamp.toLocaleTimeString(
          "default",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        );

        const resultTimestamp =
          currentDay === messageDate ? messageTime : messageDate;

        return {
          ...item,
          message: {
            ...item.message,
            timestamp: resultTimestamp,
          },
        };
      });
      setChats(chatList);
    };
    fetchChats();
  }, [userId]);

  const showChats = () =>
    chats.length > 0 ? (
      chats.map((item) => (
        <Styled.ListElement key={item.id} onClick={() => openChat(item.id)}>
          <Avatar photoUrl={item.person.photoUrl} />
          <Styled.ChatInfoSection>
            <Styled.UserName>{item.person.fullName}</Styled.UserName>
            {item.message !== undefined && (
              <>
                <Styled.Message>{`${
                  item.message.userId === userId ? "You: " : ""
                }${item.message.content}`}</Styled.Message>
                <Styled.Timestamp>{item.message.timestamp}</Styled.Timestamp>
              </>
            )}
          </Styled.ChatInfoSection>
        </Styled.ListElement>
      ))
    ) : (
      <Styled.Placeholder>Lack of messages</Styled.Placeholder>
    );
  return (
    <Styled.Container>
      <Header title={"Messages"} />
      <Styled.List>{chats === null ? "Loading..." : showChats()}</Styled.List>

      <Navigation changeView={changeView} currentView={currentView} />
    </Styled.Container>
  );
};

export default Chats;
