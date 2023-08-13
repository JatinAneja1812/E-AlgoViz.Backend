import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import {
  db,
  initializeChatRooms,
  InsertNewRoom,
} from "../../Authentication/Firebase/Firebase";
import { ChatAppLandingPageWrapper } from "./ChatAppLandingPage.styles.js";
import ChatAppNavMenu from "../ChatAppComponents/Navbar/ChatAppNavMenu";
import ErrorNotification from "../../Components/Snackbar/ErrorSnackbar";
import { onSnapshot, collection } from "firebase/firestore"; // Import Firestore functions
import AddNewRoom from "../ChatAppComponents/PopupModals/AddNewRoom";

export default function ChatAppLandingPage() {
  const [chatRooms, setChatRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Call initializeChatRooms when component mounts
    initializeChatRooms().catch((error) => {
      setError(error);
      setIsOpen(true);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const chatRoomsRef = collection(db, "chatRooms"); // Corrected line

    const unsubscribe = onSnapshot(
      chatRoomsRef,
      (querySnapshot) => {
        const rooms = [];
        querySnapshot.forEach((doc) => {
          rooms.push({ id: doc.id, ...doc.data() });
        });
        setChatRooms(rooms);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleModalOpen = () => {
    setShowModal(true); 
  };

  const handleRoomInsert = (title) => {
    setError(null);
    if (title == null || title === "") {
      setError("Please enter valid title");
      setIsOpen(true);
      return;
    } else if (!/^Chat Room \d*$/.test(title)) {
      setError(
        "Title entered is in wrong format : Pattern = Chat Room + Number."
      );
      setIsOpen(true);
      return;
    } else if (!/^.+$/.test(title)) {
      setError("Title cannot be empty.");
      setIsOpen(true);
      return;
    } else {
      setError(null);
      const roomID = title
        .replace(/^Chat Room\s+/i, "chatRoom")
        .replace(/\s+/g, "");
      InsertNewRoom(roomID, title);
      document.getElementById("RoomTitle").value = "";
      setShowModal(false);
      return;
    }
  };

  const sortedChatRooms = chatRooms
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id));

  return (
    <ChatAppLandingPageWrapper>
      {isOpen && (
        <ErrorNotification
          setIsOpen={setIsOpen}
          setError={setError}
          isOpen={isOpen}
          message={error}
        />
      )}
      <ChatAppNavMenu />
      <h2>Choose a Chat Room</h2>

      <div className="ChatRoomCards-Container">
        <Row
          style={{
            width: "100%",
            top: "-2vh",
            left: "32vh",
            position: "relative",
            display: "flex",
          }}
        >
          <Col span={24}>
            <div className="ChatRoomCards-Scroll">
              <ul className="ChatRoomCards-List">
                {isLoading && (
                  <div id="ChatRoomsload">
                    <div>G</div>
                    <div>N</div>
                    <div>I</div>
                    <div>D</div>
                    <div>A</div>
                    <div>O</div>
                    <div>L</div>
                  </div>
                )}
                {sortedChatRooms.map((room) => (
                  <li key={room.id} className="ChatRoomCard">
                    <div onClick={() => navigate(`/chatRoom/${room.id}`)} className="ChatRoomLink">
                      <h2>{room.title}</h2>
                      <h2>{room.title}</h2>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            top: "26vh",
            left: "-6vh",
            position: "relative",
            display: "flex",
          }}
        >
          <Col>
            <div className="AddRoomCard" onClick={handleModalOpen}>
              <span className="AddRoomIcon">+</span>
              <p className="AddRoomText">Add New Room</p>
            </div>
          </Col>
        </Row>
      </div>

      <AddNewRoom
        visable={showModal}
        setShowModal={setShowModal}
        handleRoomInsert={handleRoomInsert}
      />
    </ChatAppLandingPageWrapper>
  );
}
