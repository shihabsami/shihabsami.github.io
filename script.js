window.addEventListener("DOMContentLoaded", function () {
  // Get the theme switch input button.
  const themeSwitch = document.querySelector('#theme-switch label input[type="checkbox"]');

  // The event handler for the theme switch.
  function switchTheme(e) {
    // Add or remove the 'dark' class from the body.
    if (e.target.checked) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }

  // Add the theme switch event listener.
  themeSwitch.addEventListener("change", switchTheme, false);

  // Add animation classes to skill and portfolio items.
  const skillAndPortfolioItems = document.querySelectorAll(".skill-item, .portfolio-item");
  skillAndPortfolioItems.forEach((item) => {
    item.classList.add("animate-once");
  });

  // Function to get the current scroll position.
  function getScrollPosition() {
    return window.pageYOffset || window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
  }

  // The current scroll position.
  let scrollPosition = getScrollPosition();
  function checkAnimateableElements() {
    // The elements to be animated once.
    const animateOnceElements = document.getElementsByClassName("animate-once");
    for (let i = 0; i < animateOnceElements.length; i++) {
      if (scrollPosition + window.innerHeight >= animateOnceElements[i].offsetTop) {
        // The element is visible. Animate.
        animateOnceElements[i].classList.add("animate");
        animateOnceElements[i].classList.remove("animate-once");
      }
    }
  }
  checkAnimateableElements();

  // The scroll event handler.
  function handleScroll() {
    scrollPosition = getScrollPosition();

    // All the page items i.e., sections of the page.
    let pageItemElements = document.getElementsByClassName("page-item");

    // Determine the current page item.
    let closestElementIndex = 0;

    // If scrollposition is at the bottom of the page, the current page item is the last one.
    if (scrollPosition + window.innerHeight >= document.body.scrollHeight) {
      closestElementIndex = pageItemElements.length - 1;
    } else {
      let closestDistance = Infinity;
      for (let i = 0; i < pageItemElements.length; i++) {
        let element = pageItemElements[i];
        let distance = Math.abs(scrollPosition - element.offsetTop);
        if (distance <= closestDistance) {
          closestElementIndex = i;
          closestDistance = distance;
        }
      }
    }

    // All the navbar items i.e., links on the navbar.
    let navbarItems = document.getElementsByClassName("nav-item");

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
    if (closestElementIndex === 0) {
      topArrowButton.classList.remove("shown");
      bottomArrowButton.classList.add("shown");
    } else if (closestElementIndex === pageItemElements.length - 1) {
      topArrowButton.classList.add("shown");
      bottomArrowButton.classList.remove("shown");
    } else {
      topArrowButton.classList.add("shown");
      bottomArrowButton.classList.add("shown");
    }

    // The level elements of the skill items.
    const skillItemLevels = document.getElementsByClassName("skill-item-level");
    for (let i = 0; i < skillItemLevels.length; i++) {
      if (scrollPosition + window.innerHeight >= skillItemLevels[i].offsetTop) {
        // The skill item is visible. Animate.
        skillItemLevels[i].classList.add("animate");
      } else {
        // The skill item is not visible.
        skillItemLevels[i].classList.remove("animate");
      }
    }

    // The elements to be animated once.
    const animateOnceElements = document.getElementsByClassName("animate-once");
    for (let i = 0; i < animateOnceElements.length; i++) {
      if (scrollPosition + window.innerHeight >= animateOnceElements[i].offsetTop) {
        // The element is visible. Animate.
        animateOnceElements[i].classList.add("animate");
        animateOnceElements[i].classList.remove("animate-once");
      }
    }

    checkAnimateableElements();
  }

  // Add the scroll event listener.
  window.addEventListener("scroll", handleScroll);

  function toggleNavbarMenu() {
    document.getElementById("mobile-menu").classList.toggle("shown");
  }

  document.getElementById("nav-expand").addEventListener("click", toggleNavbarMenu);
  document.getElementById("nav-collapse").addEventListener("click", toggleNavbarMenu);
  const navbarMenuItems = document.querySelectorAll("#mobile-menu .nav-item");
  for (let i = 0; i < navbarMenuItems.length; i++) {
    navbarMenuItems[i].addEventListener("click", toggleNavbarMenu);
  }
});
