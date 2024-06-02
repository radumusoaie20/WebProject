import { writeDiseaseSymptoms } from "../../firebase.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
const sub = document.querySelector('#submit');
const selection = document.querySelector('#diseases');
const diseaseByTxt  = document.querySelector('#diseaseByText');
const diseaseName = document.querySelector('#newDisease');

function updateSymptomsDiseaseList(disease, symptoms){
    const db = getDatabase();
    const dbRef = ref(db, 'symptoms');
    get(dbRef).then((snapshot) => {
        let data = snapshot.val();
        console.log(data);
        for(const symptom of symptoms){
            if(data[symptom] === undefined){
                data[symptom] = [disease];
            }
            else data[symptom].push(disease);
        }
        set(dbRef, data);
    }).catch((error) => {
        console.error(error);
    });
}

sub.addEventListener('click', function() {
    let checked_symptoms = [];
    const symptoms = document.querySelector('#symptoms').querySelectorAll('input[type="checkbox"]');
    for(const symptom of symptoms){
        if(symptom.checked){
            checked_symptoms.push(symptom.value);
        }
    }
    resetCheckboxes();
    if(diseaseByTxt.checked === true){
        console.log(diseaseName.value);
        writeDiseaseSymptoms(diseaseName.value, checked_symptoms);
        updateSymptomsDiseaseList(diseaseName.value, checked_symptoms);
    }
    else{
    writeDiseaseSymptoms(selection.value, checked_symptoms);
    updateSymptomsDiseaseList(selection.value, checked_symptoms);
    }
});

function resetCheckboxes(){
    const checkboxes = document.querySelector('#symptoms').querySelectorAll('input[type="checkbox"]');
    for(const checkbox of checkboxes){
        checkbox.checked = false;
    }
}
