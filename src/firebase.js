import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCcDAOUumdNLjYOP25ut1leYHZcC_ZSx7E",
  authDomain: "netflix-clone-61945.firebaseapp.com",
  projectId: "netflix-clone-61945",
  storageBucket: "netflix-clone-61945.appspot.com",
  messagingSenderId: "346362246410",
  appId: "1:346362246410:web:13bcd10664c070bba536f3",
  measurementId: "G-8TWDJSZ26Z"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();

  export{auth}
  
  