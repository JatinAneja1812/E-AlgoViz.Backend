import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid"; // Import UUID generator
import {
  getFirestore,
  query,
  getDocs,
  getDoc,
  doc,
  collection,
  where,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  deleteDoc
} from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import for Firebase Storage
import moment from "moment";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const AUTH = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Get a Firestore instance
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(AUTH, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    return err;
  }
};

const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  avatarColor
) => {
  try {
    // Check if user already exists
    const userExists = await getDoc(doc(db, "users", email));
    if (userExists.exists()) {
      return "User already exists";
    }
    const res = await createUserWithEmailAndPassword(AUTH, email, password);
    const user = res.user;
    await updateProfile(res.user, {
      displayName: name,
    });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      avatarColor,
    });

    await sendEmailVerification(user);
  } catch (err) {
    return err.message;
  }
};

const logout = () => {
  signOut(AUTH);
};

//chat Rooms
const initialChatRooms = [
  { id: "chatRoom1", title: "Chat Room 1" },
  { id: "chatRoom2", title: "Chat Room 2" },
  { id: "chatRoom3", title: "Chat Room 3" },
  { id: "chatRoom4", title: "Chat Room 4" },
  { id: "chatRoom5", title: "Chat Room 5" },
  { id: "chatRoom6", title: "Chat Room 6" },
];

const initializeChatRooms = async () => {
  try {
    // Assuming 'db' is your Firestore database instance
    const chatRoomsRef = collection(db, "chatRooms");

    const existingChatRooms = await getDocs(chatRoomsRef);
    const existingChatRoomData = existingChatRooms.docs.map((doc) =>
      doc.data()
    );
    const existingChatRoomIds = existingChatRoomData.map((room) => room.id);
    await Promise.all(
      initialChatRooms.map(async (room) => {
        if (!existingChatRoomIds.includes(room.id)) {
          try {
            await addDoc(chatRoomsRef, room);
          } catch (error) {
            return error.message;
          }
        }
      })
    );
  } catch (error) {
    return error.message;
  }
};

const InsertNewRoom = async (roomId, roomTitle) => {
  try {
    // Assuming 'db' is your Firestore database instance
    const chatRoomsRef = collection(db, "chatRooms");

    const existingChatRooms = await getDocs(chatRoomsRef);
    const existingChatRoomData = existingChatRooms.docs.map((doc) =>
      doc.data()
    );
    const existingChatRoomIds = existingChatRoomData.map((room) => room.roomId);

    if (!existingChatRoomIds.includes(roomId)) {
      const newRoom = {
        id: roomId,
        title: roomTitle,
      };

      try {
        await addDoc(chatRoomsRef, newRoom);
        return "Room added successfully";
      } catch (error) {
        return error.message;
      }
    } else {
      return "Room with the same ID already exists";
    }
  } catch (error) {
    return error.message;
  }
};

async function sendMessage(roomId, user, text) {
  const now = moment(); // Use Moment.js to get the current date and time
  const messageId = uuidv4(); // Generate a unique ID for the message

  try {
    await addDoc(collection(db, "chat-Rooms", roomId, "messages"), {
      id: messageId,
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
      dataTime: now.format(),
    });
  } catch (error) {
    console.error(error);
  }
}

// Add this function in your Firebase code file
const deleteMessage = async (roomId, messageId) => {
  try {
    const messagesRef = collection(db, "chat-Rooms", roomId, "messages");
    const querySnapshot = await getDocs(messagesRef);

    querySnapshot.forEach(async (doc) => {
      const message = doc.data();
      if (message.id === messageId) {
        await deleteDoc(doc.ref);
      }
    });
  } catch (error) {
    console.error("Error finding and deleting message:", error);
  }
};

function getMessages(roomId, callback) {
  try {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "chat-Rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      ),
      (querySnapshot) => {
        const messages = querySnapshot.docs.map((x) => ({
          id: x.id,
          ...x.data(),
        }));

        callback(messages);
      }
    );

    return unsubscribe;
  } catch (error) {
    console.error("Error getting messages:", error);
  }
}

export {
  AUTH as auth,
  db,
  signInWithGoogle,
  registerWithEmailAndPassword,
  logout,
  storage,
  initializeChatRooms,
  InsertNewRoom,
  sendMessage,
  getMessages,
  deleteMessage,
};
