// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5-ihmu_f1Vo1lpGxH_YDs8t6LLL-uCLA",
    authDomain: "emcronix-2ddb3.firebaseapp.com",
    projectId: "emcronix-2ddb3",
    storageBucket: "emcronix-2ddb3.appspot.com",
    messagingSenderId: "499320295906",
    appId: "1:499320295906:web:24a57e3b7e5d535edca9bb",
    measurementId: "G-8YJQERWTZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;