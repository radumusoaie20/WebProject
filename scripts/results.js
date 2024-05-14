import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
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
let dict = [];
document.addEventListener('DOMContentLoaded', function(){
    fetchDiseases();
    setTimeout(execAfterFetch, 4000); //should be replaced with a promise, we need to wait for the data to be given
}
);
function execAfterFetch(){
    const div = document.querySelector('#results');
    let arr = Object.keys(dict).map((e)=>{return [e, dict[e]];});
    arr.sort((a, b)=>{return (b[1]-a[1])});
    for(let i = 0; i < arr.length; i++){
        const p = document.createElement('p');
        p.innerHTML = arr[i][0];
        div.appendChild(p);
    }
}

function fetchDiseases(){
    const db = getDatabase();
    for(const symptom of symptoms){
        fetchDiseasesForSymptom(db, symptom);
    }
}

//Implement using promises
function getDiseaseSymptomCount(disease){
    const db = getDatabase();
    const dbRef = ref(db, `diseases/${disease}/symptoms`);
    onValue(dbRef, (data)=>{
        let parseData = data.val();
        return parseData.length;
    });
}
function fetchDiseasesForSymptom(db, symptom){
    const dbRef = ref(db, `symptoms/${symptom}`);
        onValue(dbRef, (data)=>{
            let parseData = data.val();
            if(data !== null){
                for(const disease of parseData){
                  if(disease in dict) dict[disease]++;
                  else dict[disease] = 1;
            }
        }
    });
}
