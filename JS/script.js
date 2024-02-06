const navbarCollapse = document.querySelector("div.navbar-collapse");
const pageFooter = document.querySelector("footer > p");

const fullYear = new Date().getFullYear();


document.addEventListener("click", () => {
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }  
});

pageFooter.innerHTML = `Copyright by <i class="fas fa-icicles text-primary"></i> Fro<span class="text-primary">st</span>Customs<sup>&copy;</sup> ${fullYear}`;