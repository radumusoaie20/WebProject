document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll("#symptoms >li");

  for (const item of items) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    item.prepend(checkbox);
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
  
    for (const checkbox of checkboxes) {
      const span = document.createElement("span");
      checkbox.parentNode.insertBefore(span, checkbox.nextSibling);
  
      span.addEventListener("click", function() {
        checkbox.checked = !checkbox.checked;
      });
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");
  
    toggleButton.addEventListener("click", function() {
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");
    let isSidebarToggled = false;
  
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
    window.addEventListener("resize", checkSidebarVisibility);
    checkSidebarVisibility();
  
    toggleButton.addEventListener("click", function() {
      sidebar.classList.toggle('hidden');
      isSidebarToggled = !isSidebarToggled;
    });
  });
