import { get, getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// Get the diseases from the URL
let urlParams = new URLSearchParams(window.location.search);
let symptoms = (urlParams.get('symptoms')).split(',');

//on our database, we will have 
//an entry with the name symptoms

//it will look like this

/*
symptoms
    ->"anxiety" : [LIST OF DISEASES],
      "anorexia" : [LIST OF DISEASES] 
*/

let sym = [];
function fetchSymptomsDiseases(){
    const db = getDatabase();
    const dbRef = ref(db, '/symptoms');
    get(dbRef).then((snapshot)=>{
        const data = snapshot.val();
        sym = data;
    })
}
function waitForAssign(){
    setTimeout(()=>{
        if(sym === undefined){
            waitForAssign();
        }
        return;
    }, 1000);
}
function loadSymptoms(){
    fetchSymptomsDiseases();
    waitForAssign();
}
document.addEventListener('DOMContentLoaded', waitForAssign);