
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCeHBF8uc67NhBehyJcYd5T3P91DvQOn80",
    authDomain: "olx-react-ae389.firebaseapp.com",
    projectId: "olx-react-ae389",
    storageBucket: "olx-react-ae389.appspot.com",
    messagingSenderId: "959047635392",
    appId: "1:959047635392:web:a9927d4c70802d4df1f825"
  };

firebase.initializeApp(firebaseConfig);  
  
export default firebase