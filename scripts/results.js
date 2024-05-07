// Get the diseases from the URL
let urlParams = new URLSearchParams(window.location.search);
let symptoms = (urlParams.get('search')).split(',');
console.log(symptoms);

//on our database, we will have 
//an entry with the name symptoms

//it will look like this

/*
symptoms
    ->"anxiety" : [LIST OF DISEASES],
      "anorexia" : [LIST OF DISEASES] 
*/
const baseURL = "https://webproject-4839d-default-rtdb.europe-west1.firebasedatabase.app";
let dict = [];
document.addEventListener('DOMContentLoaded', function(){
    fetch(`${baseURL}/symptoms`)
    .then(response=>response.json())
    .then(data=>{
        for(const sym of symptoms){
            for(const disease of data[sym]){
                if(disease in dict){
                    dict[disease]++;
                }else{
                    dict[disease] = 1;
                }
            }
        }
        //print diseases
        let keys = Object.keys(dict);
        for(const key of keys){
            console.log(key + " : " + dict[key]);
        }
    })
});