    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
    import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
    //import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvmSz6G7CWa65Ojvp5qqZuMQe-ZLU-SIU",
  authDomain: "webproject-4839d.firebaseapp.com",
  databaseURL: "https://webproject-4839d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webproject-4839d",
  storageBucket: "webproject-4839d.appspot.com",
  messagingSenderId: "907589501686",
  appId: "1:907589501686:web:8559d07fc07159349262d7",
  measurementId: "G-F0X9RRK296"
};
// Initialize Firebase
const app  = initializeApp(firebaseConfig);

function writeDiseaseSymptoms(disease_name, symptoms){
const db = getDatabase();
set(ref(db, 'diseases/${disease_name}'), {
  "symptoms" : symptoms
})
}
export {writeDiseaseSymptoms};

//CODE THAT HANDLES writing to database
//TO BE DONE AN ADMIN PAGE - RADU

//CODE THAT HANDLES reading from database
//GETS THE SYMPTOMS ENTERED BY THE USER
//MAKES A "DICTIONARY" OF DISEASES AND COUNTS THE NUMBER OF SYMPTOMS MATCHING
//eg:
//{"nausea", "abdominal pain", "vomiting"} -> {"Diabetes": 2, "Covid-19": 1}
//In order to access a disease symptom, use the following code:
/*const db = getDatabase();
const dbRef = ref(db, 'diseases/name_of_disease/symptoms');*/
//ANDREEA

// Assuming you have a form with checkboxes for symptoms


  
