const firebaseConfig = {
        apiKey: "AIzaSyCcIXRmobTdjYIewVFDM8kT7w3-qzkOK5c",
        authDomain: "tremor-guard.firebaseapp.com",
        projectId: "tremor-guard",
        storageBucket: "tremor-guard.appspot.com",
        messagingSenderId: "113631893318",
        appId: "1:113631893318:web:32e70d4d595e692d2b7747"
    };
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    const provider = new firebase.auth.GoogleAuthProvider();