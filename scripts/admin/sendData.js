import { writeDiseaseSymptoms } from "../../firebase.js";

const sub = document.querySelector('#submit');
const selection = document.querySelector('#diseases');

sub.addEventListener('click', function() {
    let checked_symptoms = [];
    const symptoms = document.querySelectorAll('input[type="checkbox"]');
    for(const symptom of symptoms){
        if(symptom.checked){
            checked_symptoms.push(symptom.value);
        }
    }
    resetCheckboxes();
    writeDiseaseSymptoms(selection.value, checked_symptoms);
});

function resetCheckboxes(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for(const checkbox of checkboxes){
        checkbox.checked = false;
    }
}

