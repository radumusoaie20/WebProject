// Get the diseases from the URL
console.log('diseases');
let urlParams = new URLSearchParams(window.location.search);
let diseases = urlParams.get('diseases').split(',');

// Get the results div
let resultsDiv = document.getElementById('results');

// Print the diseases
for (let disease of diseases) {
    // Replace %20 with spaces
    disease = disease.replace(/%20/g, ' ');

    // Create a new paragraph for each disease
    let p = document.createElement('p');
    p.textContent = disease;

    // Add the paragraph to the results div
    resultsDiv.appendChild(p);
}