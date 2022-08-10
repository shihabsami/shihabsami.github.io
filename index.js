window.onload = function () {
  // Get the theme switch input button.
  const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  // The event handler for the theme switch.
  function switchTheme(e) {
    // Add or remove the 'dark' class from the body.
    if (e.target.checked) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }

  // Add the theme switch event listener.
  themeSwitch.addEventListener("change", switchTheme, false);

  // The scroll event handler.
  function handleScroll() {
    // The current scroll position.
    let scrollPosition =
      window.pageYOffset || window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;

    // All the page items i.e., sections of the page.
    let pageItemElements = document.getElementsByClassName("page-item");

    // Determine the current page item.
    let closestElementIndex = 0;
    let closestDistance = Infinity;
    for (let i = 0; i < pageItemElements.length; i++) {
      let element = pageItemElements[i];
      let distance = Math.abs(scrollPosition - element.offsetTop);
      if (distance <= closestDistance) {
        closestElementIndex = i;
        closestDistance = distance;
      }
    }

    // All the navbar items i.e., links on the navbar.
    let navbarItems = document.getElementsByClassName("navbar-item");

    // Set the active navbar item.
    for (let i = 0; i < navbarItems.length; i++) {
      if (navbarItems[i].innerHTML.toLowerCase() === pageItemElements[closestElementIndex].id)
        navbarItems[i].classList.add("active");
      else navbarItems[i].classList.remove("active");
    }

    // All the arrow text items i.e., reflecting the current page item.
    let arrowTextElements = document.getElementsByClassName("arrow-text-item");

    // Set the currently visible arrow text item.
    for (let i = 0; i < arrowTextElements.length; i++) {
      if (i === closestElementIndex) arrowTextElements[i].classList.add("shown");
      else arrowTextElements[i].classList.remove("shown");
    }

    // The top arrow button of the navigation arrow.
    const topArrowButton = document.getElementById("top-arrow-button");
    // The bottom arrow button of the navigation arrow.
    const bottomArrowButton = document.getElementById("bottom-arrow-button");
    if (scrollPosition === 0) {
      topArrowButton.classList.remove("shown");
      bottomArrowButton.classList.add("shown");
    } else if (document.body.scrollHeight - document.body.scrollTop === document.body.clientHeight) {
      topArrowButton.classList.add("shown");
      bottomArrowButton.classList.remove("shown");
    } else {
      topArrowButton.classList.add("shown");
      bottomArrowButton.classList.add("shown");
    }
  }

  // Add the scroll event listener.
  window.addEventListener("scroll", handleScroll);

  function toggleNavbarMenu() {
    document.getElementById("navbar-menu").classList.toggle("shown");
  }

  document.getElementById("navbar-expand-button").addEventListener("click", toggleNavbarMenu);
  document.getElementById("navbar-close-button").addEventListener("click", toggleNavbarMenu);
  const navbarMenuItems = document.querySelectorAll("#navbar-menu > div > .navbar-item");
  for (let i = 0; i < navbarMenuItems.length; i++) {
    navbarMenuItems[i].addEventListener("click", toggleNavbarMenu);
  }
};
