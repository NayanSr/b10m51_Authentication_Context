// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYyuGXpb1kjBsSU_Bw4r6uOk22Eu0aX4",
  authDomain: "authentication-with-cont-9f969.firebaseapp.com",
  projectId: "authentication-with-cont-9f969",
  storageBucket: "authentication-with-cont-9f969.firebasestorage.app",
  messagingSenderId: "293257442158",
  appId: "1:293257442158:web:cba5bccb4a19aae89f477f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default auth;
