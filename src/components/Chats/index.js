import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Styled from "./style";
import Header from "../../parts/Header";
import Navigation from "../../parts/Navigation";
import Avatar from "../../parts/Avatar";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";

const Chats = ({ setUserToChat }) => {
  const history = useHistory();
  const [chats, setChats] = useState(null);
  const { userId } = parseJwt();

  useEffect(() => {
    const fetchChats = async () => {
      const res = await axios.get(`http://localhost:3001/chat/user/${userId}`);
      const chatList = res.data.map((item) => {
        const [person] = item.participants.filter(
          (user) => user._id !== userId
        );
        const [message] = item.messages.slice(-1);
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleDateString("default", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        const timestamp = new Date(message.timestamp);
        const messageDate = timestamp.toLocaleDateString("default", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        const messageTime = timestamp.toLocaleTimeString();

        message.timestamp =
          currentDay === messageDate ? messageTime : messageDate;

        return {
          id: item._id,
          person,
          message,
        };
      });
      setChats(chatList);
    };
    fetchChats();
  }, [userId]);

  const showChats = () =>
    chats.length > 0
      ? chats.map((item) => (
          <Styled.ListElement key={item.id}>
            <Styled.LinkToChat onClick={() => setUserToChat(item.id)}>
              <Avatar photoUrl={item.person.photoUrl} />
              <Styled.ChatInfoSection>
                <Styled.UserName>{item.person.fullName}</Styled.UserName>
                {item.message !== undefined && (
                  <>
                    <Styled.Message>{`${
                      item.message.userId === userId ? "You: " : ""
                    }${item.message.content}`}</Styled.Message>
                    <Styled.Timestamp>
                      {item.message.timestamp}
                    </Styled.Timestamp>
                  </>
                )}
              </Styled.ChatInfoSection>
            </Styled.LinkToChat>
          </Styled.ListElement>
        ))
      : "Lack of messages";
  return (
    <Styled.Container>
      <Header title={"Messages"} />
      <Styled.List>{chats === null ? "Loading..." : showChats()}</Styled.List>

      <Navigation />
    </Styled.Container>
  );
};

export default Chats;
