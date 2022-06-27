window.onload = function () {
  const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }

  themeSwitch.addEventListener("change", switchTheme, false);

  function handleScroll() {
    let pageItemElements = document.getElementsByClassName("page-item");
    const topArrowButton = document.getElementById("top-arrow-button");
    const bottomArrowButton = document.getElementById("bottom-arrow-button");

    let scrollPosition =
      window.pageYOffset || window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;

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

    let arrowTextElements = document.getElementsByClassName("arrow-text");
    for (let i = 0; i < arrowTextElements.length; i++) {
      if (i !== closestElementIndex) arrowTextElements[i].classList.replace("currently-visible", "currently-hidden");
      else arrowTextElements[i].classList.replace("currently-hidden", "currently-visible");
    }

    switch (closestElementIndex) {
      case 0:
        topArrowButton.classList.replace("opacity-100", "opacity-0");
        bottomArrowButton.classList.replace("opacity-0", "opacity-100");
        break;
      case 1:
        topArrowButton.classList.replace("opacity-0", "opacity-100");
        bottomArrowButton.classList.replace("opacity-0", "opacity-100");
        break;
      case 4:
        topArrowButton.classList.replace("opacity-0", "opacity-100");
        bottomArrowButton.classList.replace("opacity-100", "opacity-0");
        break;
      default:
        break;
    }
  }

  window.addEventListener("scroll", handleScroll);
};
