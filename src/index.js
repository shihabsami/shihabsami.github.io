window.onload = function () {
  const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }

  themeSwitch.addEventListener("change", switchTheme, false);
};
