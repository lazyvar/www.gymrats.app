document.addEventListener('DOMContentLoaded', function() { 
  const acc = document.getElementsByClassName("faq-section");
  
  let i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      const panel = this.nextElementSibling;
  
      this.classList.toggle("open");
  
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
})