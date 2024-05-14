    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
    import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"

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
  set(ref(db, `diseases/${disease_name}`), {
      "symptoms" : symptoms
  })
}
export {writeDiseaseSymptoms};