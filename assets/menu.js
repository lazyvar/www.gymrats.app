document.addEventListener("click", function(click) {
  if (click.target.id === "ham") { return }
  if (click.target.className === "hamburgler") { return }

  const navLinks = document.getElementById("links");

  if (navLinks.className !== "nav-links") {
    navLinks.className = "nav-links";
  }
});

function showMenu() {
  const navLinks = document.getElementById("links");

  if (navLinks.className === "nav-links") {
    navLinks.className += " visible";
  } else {
    navLinks.className = "nav-links";
  }
}