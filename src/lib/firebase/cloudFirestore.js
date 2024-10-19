import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
   apiKey: 'AIzaSyA5qHS9mRUy-U4BlX1rnaE87NbHNUaryAo',
   authDomain: 'landing-laki.firebaseapp.com',
   projectId: 'landing-laki',
   storageBucket: 'landing-laki.appspot.com',
   messagingSenderId: '213051145732',
   appId: '1:213051145732:web:236a6ca320d4933e673f51',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
export default db
