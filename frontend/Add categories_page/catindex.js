function openNav() {
    document.querySelector("ul").classList.toggle("open");
}
// ////////////////////


document.addEventListener("DOMContentLoaded", function() {
  const categoryList = document.getElementById("category-list");
  const searchInput = document.getElementById("search-input");

  // Get categories from localStorage and render them
  let categories = JSON.parse(localStorage.getItem("categories")) || [];

  function renderCategories() {
    categoryList.innerHTML = "";
    categories.forEach(function(categoryName) {
      const li = document.createElement("li");
      li.textContent = categoryName;

      // Add delete button to each category
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        // Remove category from array and update localStorage
        const index = categories.indexOf(categoryName);
        categories.splice(index, 1);
        localStorage.setItem("categories", JSON.stringify(categories));

        // Remove category from list
        categoryList.removeChild(li);
      });

      li.appendChild(deleteButton);
      categoryList.appendChild(li);
    });
  }

  renderCategories();

  searchInput.addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      categories = JSON.parse(localStorage.getItem("categories")) || [];
    } else {
      const filteredCategories = categories.filter(function(categoryName) {
        return categoryName.toLowerCase().includes(searchTerm);
      });
      categories = filteredCategories;
    }
    renderCategories();
  });
});


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector("body").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("body").style.marginLeft= "0";
}
// ////////////////////////







      document.addEventListener("DOMContentLoaded", function() {
        const categoryForm = document.getElementById("category-form");
      
        categoryForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const categoryName = document.getElementById("category-name").value;
      
          // Save category name to localStorage
          const categories = JSON.parse(localStorage.getItem("categories")) || [];
          categories.push(categoryName);
          localStorage.setItem("categories", JSON.stringify(categories));
      
          // Navigate to categories page
          window.location.href = "categories.html";
        });
      });
      let categoryname=document.getElementById("category-name");
      

      let submit=document.getElementById("submit");
      submit.addEventListener("click",function(){
        alert(`Successfully Added ${categoryname.value} to Categories-List`)
      })