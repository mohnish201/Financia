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