import React, { useState, useEffect, useRef } from "react";
import ChatHeader from "../../parts/ChatHeader";
import MessageInput from "../../parts/MessageInput";
import { useParams } from "react-router-dom";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";
import Styled from "./style";
import io from "socket.io-client";

let socket;

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState([]);
  const { id } = useParams();
  const { userId } = parseJwt();
  const listRef = useRef(null);
  const ENDPOINT = "http://localhost:3001";

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`http://localhost:3001/chat/${id}`);
      const [result] = res.data;
      setMessages(result.messages);
      setParticipants(result.participants);
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", id);
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, id]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const getFriendName = () => {
    const result = participants.filter((item) => item._id !== userId);
    const [friend] = result;
    return friend !== undefined && friend.fullName;
  };

  const isUserMessage = (id) => {
    return id === userId;
  };

  const scrollToBottom = () => {
    const elements = listRef.current.children;
    const lastElement = elements[elements.length - 1];
    if (lastElement !== undefined) {
      listRef.current.scroll(0, lastElement.getBoundingClientRect().top);
    }
  };

  const showMessages = () =>
    messages.length > 0
      ? messages.map((item, index) => (
          <Styled.ListElement
            key={item._id}
            isUserMessage={isUserMessage(item.userId)}>
            <Styled.Message isUserMessage={isUserMessage(item.userId)}>
              <Styled.MessageContent>{item.content}</Styled.MessageContent>
            </Styled.Message>
          </Styled.ListElement>
        ))
      : "No messages";

  return (
    <Styled.Container>
      <ChatHeader title={getFriendName()} />
      <Styled.List ref={listRef}>
        {messages === null ? "Loading..." : showMessages()}
      </Styled.List>
      <MessageInput socket={socket} roomId={id} userId={userId} />
    </Styled.Container>
  );
};

export default ChatRoom;
