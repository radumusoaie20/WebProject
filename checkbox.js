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

