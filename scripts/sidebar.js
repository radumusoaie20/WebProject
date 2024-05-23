const nav = document.querySelector('#top');
let isSidebarToggled = false;  
let sidebar = null;
let toggleButton = null;
document.addEventListener("DOMContentLoaded", function() {
   fetch('./components/navbar.html')
   .then(response=>{
    if(response.ok) return response.text();
    throw new Error('Request failed!');  
    })
   .then(data=>{
    nav.innerHTML = data;
   })
   .then(()=>{
    toggleButton = nav.querySelector('#toggle-sidebar');
    sidebar = document.querySelector('#sidebar');
    toggleButton.addEventListener("click", function() {
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    });
    window.addEventListener("resize", checkSidebarVisibility);
    toggleButton.addEventListener("click", function() {
      sidebar.classList.toggle('hidden');
      isSidebarToggled = !isSidebarToggled;
    });
    checkSidebarVisibility();
  })
  .catch(error=>{console.log(error);});
});
function checkSidebarVisibility() {
  if (window.innerWidth <= 600) {
    toggleButton.style.display = "block";
    if (!isSidebarToggled) {
      sidebar.classList.add('hidden');
    }
  } else {
    toggleButton.style.display = "none";
  }
  sidebar.classList.add('show');
}