// Get the form and the input field
let form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', ()=>{
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  let symptoms = "";
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for(const checkbox of checkboxes){
    if(checkbox.checked){
        symptoms += checkbox.value + ",";
    }
  }
  symptoms = symptoms.substring(0, symptoms.length-1);
  const url = `results.html?symptoms=${symptoms}`;
  window.location = url;
})
});