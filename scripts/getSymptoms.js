const placeAt = document.querySelector('#symptoms');

let categories=[
    "General",
    "Cardiovascular",
    "Ear, Nose and Throat",
    "Gastrointestinal",
    "Hair",
    "Skin",
    "Neurological",
    "Gyanecological",
    "Ocular",
    "Psychiatric",
    "Pulmonary",
    "Rheumatologic",
    "Urologic"
];

document.addEventListener('DOMContentLoaded', function() {
    fetch('./data/symptoms.json')
    .then(response=>{
        if(response.ok) return response.text();
        throw new Error('Request failed!');
    })
    .then(data=>{
        const obj = JSON.parse(data);
        for(const category of categories){
            const section = document.createElement('section');
            section.innerHTML = `<h2>${category}</h2>`;
            const ul = document.createElement('ul');
            for(const symptom of obj[category]){
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = symptom;
                const span = document.createElement('span');
                const li = document.createElement('li');
                li.innerHTML = symptom;
                li.prepend(checkbox);
                checkbox.parentNode.insertBefore(span, checkbox.nextSibling);
                span.addEventListener('click', function(){
                    checkbox.checked = !checkbox.checked;
                });
                ul.appendChild(li);
            }
            section.appendChild(ul);
            placeAt.appendChild(section);
        }
    })
});