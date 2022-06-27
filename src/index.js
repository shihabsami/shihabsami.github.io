window.onload = function () {
  const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }

  themeSwitch.addEventListener("change", switchTheme, false);

  function handleScroll() {
    let elements = document.getElementsByClassName("page-item");
    const arrowTextElement = document.getElementById("arrow-text");
    const topArrowButton = document.getElementById("top-arrow-button");
    const bottomArrowButton = document.getElementById("bottom-arrow-button");

    let scrollPosition =
      window.pageYOffset || window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;

    let closestElementIndex = 0;
    let closestDistance = Infinity;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let distance = Math.abs(scrollPosition - element.offsetTop);
      if (distance <= closestDistance) {
        closestElementIndex = i;
        closestDistance = distance;
      }
    }

    arrowTextElement.innerHTML = elements[closestElementIndex].id
      .at(0)
      .toUpperCase()
      .concat(elements[closestElementIndex].id.substring(1));

    arrowTextElement.classList.forEach((className) => arrowTextElement.classList.remove(className));
    arrowTextElement.classList.add("row-span-1", "text-md", "self-center", "rotate-90", "transition-all", "bg-white");
    switch (closestElementIndex) {
      case 0:
        arrowTextElement.classList.add("row-start-1");
        topArrowButton.classList.add("hidden");
        bottomArrowButton.classList.remove("hidden");
        break;
      case 1:
        arrowTextElement.classList.add("row-start-2");
        topArrowButton.classList.remove("hidden");
        bottomArrowButton.classList.remove("hidden");
        break;
      case 2:
        arrowTextElement.classList.add("row-start-3");
        topArrowButton.classList.remove("hidden");
        bottomArrowButton.classList.remove("hidden");
        break;
      case 3:
        arrowTextElement.classList.add("row-start-4");
        topArrowButton.classList.remove("hidden");
        bottomArrowButton.classList.remove("hidden");
        break;
      case 4:
        arrowTextElement.classList.add("row-start-5");
        topArrowButton.classList.remove("hidden");
        bottomArrowButton.classList.add("hidden");
        break;
      default:
        break;
    }
  }

  window.addEventListener("scroll", handleScroll);
};
