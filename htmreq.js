window.addEventListener('DOMContentLoaded', (event) => {
    fetch('top.html')
        .then(response => response.text())
        .then(data => document.getElementById('top1').innerHTML = data);

    fetch('bottom.html')
        .then(response => response.text())
        .then(data => document.getElementById('bottom').innerHTML = data);
});