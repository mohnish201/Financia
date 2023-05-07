document.addEventListener("DOMContentLoaded", function() {
    const categoryList = document.getElementById("category-list");
    const searchInput = document.getElementById("search-input");
  
    // Get categories from localStorage and render them
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
  
    function renderCategories() {
      categoryList.innerHTML = "";
      categories.forEach(function(categoryName) { 
        const li = document.createElement("li");
        li.className="list";
        li.textContent = categoryName;
        categoryName.className="datalist";
  
        // Add delete button to each category
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className="del";
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
  
  // ///////////////////
  
  ///////////////////////////
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("body").style.marginLeft= "0";
  }
  
  /////////////////////
  
  
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', function() {
    
      const searchTerm = searchBar.value.toLowerCase();
      console.log("hello")
    
      const categoryElements = document.getElementsByClassName('category');
  
      for (let i = 0; i < categoryElements.length; i++) {
  
        const title = categoryElements[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
    
        if (title.includes(searchTerm)) {
          categoryElements[i].style.display = 'flex';
        } else {
          categoryElements[i].style.display = 'none';
        }
      }
    });
  
  
  
    ///////////////////
  
    let submit=document.getElementById("submit")
      let circle_btn = document.querySelector('.circle-btn');
  let addcatagories = document.getElementById('addcatagories');
  
  circle_btn.addEventListener('click', function() {
      addcatagories.style.display= "block"
      addcatagories.style.visibility = "visible"
      addcatagories.classList.toggle('show'); 
     
  });
  
  function closeTransDiv(){
      addcatagories.style.visibility = "hidden";
    }
  