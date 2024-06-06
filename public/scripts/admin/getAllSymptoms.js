const placeAt = document.querySelector('#symptoms');

//Retrieving symptoms from JSON file

let categories=[];
const symptoms = [];

function getAll(){
    fetch('./data/symptoms.json')
    .then(response=>{
        if(response.ok) return response.text();
        throw new Error('Request failed!');
    })
    .then(data=>{
        const obj = JSON.parse(data);
        categories = Object.keys(obj);
        for(const category of categories){
            for(const symptom of obj[category]){
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = symptom;
                checkbox.name = symptom;
                const label = document.createElement('label');
                label.htmlFor = symptom;
                label.innerHTML = symptom;
                placeAt.appendChild(checkbox);
                placeAt.appendChild(label);
                placeAt.appendChild(document.createElement('br'));
                symptoms.push(symptom);
            }
        }
    })
}
document.addEventListener('DOMContentLoaded', getAll);

const filter = document.querySelector('#filter');

filter.addEventListener('keyup', function(){
    const value = filter.value.toLowerCase();
    const checkboxes = placeAt.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox){
        if(checkbox.value.toLowerCase().indexOf(value) > -1){
            checkbox.style.display = '';
            checkbox.nextElementSibling.style.display = '';
            checkbox.nextElementSibling.nextElementSibling.style.display = '';
        } else {
            checkbox.style.display = 'none';
            checkbox.nextElementSibling.style.display = 'none';
            checkbox.nextElementSibling.nextElementSibling.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function(){
    const count = document.querySelector('#count');
    const url = "https://webproject-4839d-default-rtdb.europe-west1.firebasedatabase.app/diseases.json";
    fetch(url)
    .then(response=>{
        if(response.ok) return response.json();
        throw new Error('Request failed!');
    }
    ).then(data=>{
        count.innerHTML = "Number of total diseases : " + Object.keys(data).length;
    })
});