const base_url = "https://clinicaltables.nlm.nih.gov/api/conditions/v3/search";
const dropdown = document.querySelector('#diseases');
const count = 500;

//Function to load conditions
function loadConditions() {
    fetch(`${base_url}?terms=&&count=${count}&&df=primary_name,info_link_data`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Request failed!');
    })
    .then(data=>{
        for(const item of data[3]){
            const name = item[1].split(',')[1];
            if(name === undefined) continue;
            const option = document.createElement('option');
            option.value = name;
            option.innerHTML = name;
            dropdown.appendChild(option);
        }
    })
    .catch(error=>{console.log(error);});
}
document.addEventListener('DOMContentLoaded', loadConditions);