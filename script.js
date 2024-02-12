function darkModeToggle() {
  const bodyEl = document.body;
  bodyEl.classList.toggle("dark_mode");
}

const darkToggle = document.getElementById("dark_mode");
darkToggle.addEventListener("change", darkModeToggle);