import React, { useEffect, useState } from "react";
import { socket } from "./lib/socket";

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", {
      text: message,
      time: new Date().toLocaleTimeString(),
    });
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Socket.IO Chat</h2>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={sendMessage}>Send</button>

      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            {msg.text} ({msg.time})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
