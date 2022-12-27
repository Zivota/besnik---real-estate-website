const burgerBtn = document.querySelector(".nav-bar__burgerBtn");

// adding event listener to our burger button for toggling navigation menu when users are on smaller devices
burgerBtn.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-bar__links");
  burgerBtn.classList.toggle("burger-active");

  navLinks.classList.toggle("nav-bar__links-active");
});
