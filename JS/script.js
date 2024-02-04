const navbarCollapse = document.querySelector("div.navbar-collapse");

document.addEventListener("click", () => {
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }  
});
