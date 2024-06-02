<<<<<<< HEAD
import { get, getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// Get the diseases from the URL
let urlParams = new URLSearchParams(window.location.search);
let symptoms = (urlParams.get('symptoms')).split(',');

=======
import { getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
// Get the diseases from the URL
let urlParams = new URLSearchParams(window.location.search);
let symptoms = (urlParams.get('symptoms')).split(',');
const results = document.querySelector('#results');
>>>>>>> fa77d9a7043772f014a4013521f8038587eea16c
//on our database, we will have 
//an entry with the name symptoms

//it will look like this

/*
symptoms
    ->"anxiety" : [LIST OF DISEASES],
      "anorexia" : [LIST OF DISEASES] 
*/
<<<<<<< HEAD

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
=======
document.addEventListener('DOMContentLoaded', function(){
        const db = getDatabase();
        const dbRef = ref(db, 'symptoms');
        get(dbRef).then((snapshot) => {
            let data = snapshot.val();
            let diseases = [];
            for(const symptom of symptoms){
                for(const disease of data[symptom]){
                    if(diseases[disease] === undefined){
                        diseases[disease] = 1;
                    }
                    else{diseases[disease]++;}
            }
        }
            //sort the array
            let sorted_byValue = Object.keys(diseases).map((key)=>[key, diseases[key]]).sort((a,b)=>b[1]-a[1]);
            //sorted_byValue has the diseases sorted by the number of symptoms descending
            //Let's add them to the DOM
            console.log(sorted_byValue);
            for(let i = 0; i < sorted_byValue.length; i++){
                const div = document.createElement('div');
                div.classList.add('results');
                const name = document.createElement('a');
                name.target = "_blank";
                name.innerHTML = sorted_byValue[i][0];
                const symptomChecked = document.createElement('p');
                symptomChecked.innerHTML = `Symptoms : ${sorted_byValue[i][1]}`;
                symptomChecked.id = "sym";
                div.appendChild(name);
                div.appendChild(symptomChecked);
                results.appendChild(div);
            }
            for(let i = 0; i < sorted_byValue.length; i++){
                const name = sorted_byValue[i][0]; //get name of the disease
                const newRef = ref(db, `diseases/${name}`);
                get(newRef).then((snapshot)=>{
                    const data = snapshot.val();
                    console.log(data);
                    results.children.item(i).querySelector('a').href = `${data.link}`;
                    results.children.item(i).querySelector('#sym').innerHTML += `/${data.symptoms.length}`;
                })
            }
        });
});
>>>>>>> fa77d9a7043772f014a4013521f8038587eea16c
