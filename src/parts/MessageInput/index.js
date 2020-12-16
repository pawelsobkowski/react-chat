import React, { useState, useEffect } from "react";
import Styled from "./style";
import { ArrowUp } from "react-feather";
import axios from "axios";

const MessageInput = ({ socket, roomId, userId }) => {
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = async () => {
    socket.emit("sendMessage", { userId, messageInput, roomId }, () =>
      setMessageInput("")
    );
    await axios.post(`http://localhost:3001/chat/${roomId}`, {
      content: messageInput,
      userId,
    });
  };

  return (
    <Styled.Container>
      <Styled.Input
        placeholder="Message..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.currentTarget.value)}
        onKeyUp={(e) =>
          e.key === "Enter" && messageInput ? sendMessage() : null
        }
      />
      <Styled.SendButton
        onClick={sendMessage}
        disabled={messageInput.length === 0}>
        <ArrowUp />
      </Styled.SendButton>
    </Styled.Container>
  );
};

export default MessageInput;
