//access the nav elements of the site to hide
const primaryNav = document.querySelector("#primary-nav");
// access the button to trigger the toggle
const primaryNavButton = document.querySelector("#primary-nav-toggle");

// add an event listener to trigger the toggle button
primaryNavToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("visible");
});
//hiding the items using selecting classList
