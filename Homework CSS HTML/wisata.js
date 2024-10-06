const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active")
    }
});

document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar-collapse');
  const isNavbarOpen = navbar.classList.contains('show');
  
  // If the click is outside the navbar and the navbar is open, close it
  if (isNavbarOpen && !navbar.contains(event.target) && !event.target.closest('.navbar-toggler')) {
    document.querySelector('.navbar-toggler').click(); // Simulates closing the navbar
  }
});





