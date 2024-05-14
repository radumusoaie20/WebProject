import { getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
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
            console.log(sorted_byValue);
            //sorted_byValue has the diseases sorted by the number of symptoms descending
            //Continue with the code from here(otherwise you will need to take into account the asynchronous nature of the get function)
        });
});
