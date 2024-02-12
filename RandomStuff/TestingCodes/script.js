//access the nav elements of the site to hide
const primaryNav = document.querySelector("#primary-nav");
// access the button to trigger the toggle
const primaryNavButton = document.querySelector("#primary-nav-toggle");

// add an event listener to trigger the toggle button
primaryNavToggle.addEventListener("click", () => {
  console.log("Button Clicked!", primaryNav);
});
//hiding the items using selecting classList
