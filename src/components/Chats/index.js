import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Styled from "./style";
import Header from "../../parts/Header";
import Navigation from "../../parts/Navigation";
import Avatar from "../../parts/Avatar";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";
import { Link } from "react-router-dom";

const Chats = () => {
  const history = useHistory();
  const [chats, setChats] = useState(null);
  const { userId } = parseJwt();

  useEffect(() => {
    const fetchChats = async () => {
      const res = await axios.get(`http://localhost:3001/chat/${userId}`);
      const chatList = res.data.map((item) => {
        const [person] = item.participants.filter(
          (user) => user._id !== userId
        );
        const [message] = item.messages.slice(-1);

        return {
          id: item._id,
          person,
          message,
        };
      });
      console.log(chatList);
      setChats(chatList);
    };
    fetchChats();
  }, [userId]);

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const showChats = () =>
    chats.length > 0
      ? chats.map((item) => (
          <Styled.ListElement key={item.id}>
            <Styled.LinkToChat to={`m/${item.id}`}>
              <Avatar photoUrl={item.person.photoUrl} />
              <Styled.ChatInfoSection>
                <Styled.UserName>{item.person.fullName}</Styled.UserName>
                {item.message !== undefined && (
                  <>
                    <Styled.Message>{`${
                      item.message.userId === userId && "You: "
                    }${item.message.content}`}</Styled.Message>
                    <Styled.Timestamp>
                      {new Date(item.message.timestamp).toLocaleTimeString()}
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
      <Header title={"Messages"} logout={logout} />
      <Styled.List>{chats === null ? "Loading..." : showChats()}</Styled.List>

      <Navigation />
    </Styled.Container>
  );
};

export default Chats;
