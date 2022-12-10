// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  updateDoc,
  doc,
  arrayUnion,
  setDoc,
} from "firebase/firestore";
import { setPostId } from "./components/Functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmw7MTj2GSL7FoDLgEJpK_KZinKyXHArI",
  authDomain: "bilgi-bankasi-a892d.firebaseapp.com",
  projectId: "bilgi-bankasi-a892d",
  storageBucket: "bilgi-bankasi-a892d.appspot.com",
  messagingSenderId: "906814455555",
  appId: "1:906814455555:web:595e5201cfe3f4051db336",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore(app);

// export const addProfilePhoto = (file) => {
//   if (!file) {
//     return;
//   } else if (!file.type.includes("image/jp")) {
//     return "error";
//   } else {
//     const storageRef = ref(storage, file.name);
//     const uploadTask = uploadBytesResumable(storageRef, file);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot?.ref).then(async (downloadURL) => {
//           return downloadURL;
//         });
//       }
//     );
//   }
// };

export const addPost = async (
  profilePhoto,
  displayName,
  title,
  bio,
  thumbnail,
  content
) => {
  try {
    await setDoc(doc(db, "posts", setPostId(title)), {
      title,
      thumbnail,
      content,
    });
    await setDoc(doc(db, "users", setPostId(displayName)), {
      profilePhoto,
      displayName,
      bio,
    });
  } catch (e) {
    console.log(e);
  }
};
