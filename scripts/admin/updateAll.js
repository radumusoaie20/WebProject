import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"


function updateAllSymptoms(){
    const db = getDatabase();
    const dbRef = ref(db, 'diseases');
    let result = [];
    get(dbRef).then((snapshot) => {
        let data = snapshot.val();
        for(const disease in data){
            for(const symptom of data[disease].symptoms){
                if(result[symptom] === undefined)
                    result[symptom] = [disease];
                else result[symptom].push(disease);
            }
        }
        set(ref(db, 'symptoms'), result);
    }).catch((error) => {
        console.error(error);
    });
}
document.querySelector('#update').addEventListener('click', updateAllSymptoms);