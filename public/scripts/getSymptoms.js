const placeAt = document.querySelector('#symptoms');
const user_query = document.querySelector('#search');

let categories=[];

function updateQuery(){
    const sections = document.querySelectorAll('#symptoms > section');
    let count = 0;
    for(const section of sections){
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');
        for(const checkbox of checkboxes){
            if(checkbox.value.includes(user_query.value.toLowerCase())){
                checkbox.parentNode.style.display = '';
            }
            else{ checkbox.parentNode.style.display = 'none';
                count++;   
            }
        }
        if(count == section.querySelector('ul').childElementCount){
             section.style.display = 'none';
        }
        else section.style.display = '';
        count = 0;
    }
}

function retrieveSymptoms(place) {
    fetch('./data/symptoms.json')
    .then(response=>{
        if(response.ok) return response.text();
        throw new Error('Request failed!');
    })
    .then(data=>{
        const obj = JSON.parse(data);
        categories = Object.keys(obj);
        for(const category of categories){
            const section = document.createElement('section');
            section.innerHTML = `<h2>${category}</h2>`;
            const ul = document.createElement('ul');
            
            for(const symptom of obj[category]){
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = symptom;
                checkbox.name = "symptoms[]";
                checkbox.id = symptom;
                const li = document.createElement('li');
                li.innerHTML = 
                `${checkbox.outerHTML}
                <label for="${symptom}">${symptom}</label>`;
                ul.appendChild(li);
            }
            section.appendChild(ul);
            place.appendChild(section);
        }
    })
    .then(()=>{user_query.addEventListener('keyup', updateQuery);})
};

document.addEventListener('DOMContentLoaded', ()=>{retrieveSymptoms(placeAt);});

export { retrieveSymptoms };
