import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { onSnapshot, collection } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../../Authentication/Firebase/Firebase";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatRoomsNavMenu from "../Navbar/ChatRoomNavMenu";
import { Button } from "@mui/material";
import { useMessages } from "../../../Utility/Hooks/useMessage";
import "./ChatRoom.styles.css";
import {
  sendMessage,
  deleteMessage,
} from "../../../Authentication/Firebase/Firebase";
import { Popconfirm } from "antd";
import ErrorNotification from "../../../Components/Snackbar/ErrorSnackbar";
import { formatTimestamp } from "../../../Utility/LibraryFunctions/FormatedTimeStamp";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

export default function ChatRoom() {
  const [chatRooms, setChatRooms] = useState([]);
  const [user] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [avatarColor] = useState(sessionStorage.getItem("avatarColor"));
  const [error, setError] = useState([]);
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const chatRoomsRef = collection(db, "chatRooms");

    const unsubscribe = onSnapshot(
      chatRoomsRef,
      (querySnapshot) => {
        const rooms = [];
        querySnapshot.forEach((doc) => {
          rooms.push({ id: doc.id, ...doc.data() });
        });
        setChatRooms(rooms);
      },
      (error) => {
        setError(error.message);
        setIsOpen(true);
      }
    );

    return () => unsubscribe();
  }, []);

  const navigate = useNavigate();
  const containerRef = React.useRef(null);

  const params = useParams();

  const room = chatRooms.find((x) => x.id === params.id);
  let title = room?.title;
  let roomId = room?.id;
  if (room === undefined || title == null || roomId == null) {
    navigate("/chatRoomApp");
  }

  const messages = useMessages(roomId);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(roomId, user, value);
    setValue("");
  };

  function Message({ message, isOwnMessage }) {
    const { id, displayName, text, dateTime } = message;

    const formattedTimestamp = formatTimestamp(dateTime);
    const avatarInitial = displayName.charAt(0).toUpperCase();

    const handleDelete = () => {
      deleteMessage(roomId, id);
    };

    return (
      <li className={["message", isOwnMessage && "own-message"].join(" ")}>
        <div className="message-details">
          <div className="avatar-and-sender">
            <div
              className="message-avatar"
              style={{ backgroundColor: avatarColor }}
            >
              {avatarInitial}
            </div>
            <h4 className="sender">{isOwnMessage ? "You" : displayName}</h4>
          </div>
          <div className="message-text">{text}</div>
          <div className="delete-button">
            <div className="timestamp">{formattedTimestamp}</div>
            {isOwnMessage && (
              <Popconfirm
                title="Are you sure?"
                okText={"Yes"}
                cancelText={"No"}
                onConfirm={() => handleDelete()}
              >
                <Button
                  startIcon={
                    <DeleteTwoToneIcon
                      style={{ fontSize: "20px", color: "red" }}
                    />
                  }
                  size="small"
                />
              </Popconfirm>
            )}
          </div>
        </div>
      </li>
    );
  }

  return (
    <div className="chat-room-container">
      {isOpen && (
        <ErrorNotification
          setIsOpen={setIsOpen}
          setError={setError}
          isOpen={isOpen}
          message={error}
        />
      )}
      <ChatRoomsNavMenu user={user} title={title} />
      <h2>{"Jatin"}</h2>
      <div className="chat-content">
        <div className="message-list-container" ref={containerRef}>
          <ul className="message-list">
            {messages.map((x) => (
              <Message
                key={x.id}
                message={x}
                isOwnMessage={x.uid === user.uid}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="sticky-message">
        <form onSubmit={handleSubmit} className="message-input-container">
          <input
            type="text"
            placeholder="Enter a message"
            value={value}
            onChange={handleChange}
            className="message-input"
            required
            minLength={1}
          />
          <Button
            startIcon={<SendOutlinedIcon />}
            type="submit"
            disabled={value.length < 1}
            className="send-message"
            style={{
              color: "#fff",
              background: "#1976d2",
            }}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
