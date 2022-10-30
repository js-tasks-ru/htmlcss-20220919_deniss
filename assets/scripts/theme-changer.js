const html = document.documentElement;
const themeChangers = document.querySelectorAll('.theme_changer');
const themes = document.querySelectorAll('[data-type="theme"]');

function themeSwitch(themeChangerSwitched) {
  themeChangers.forEach(themechanger => {
    if (themechanger !== themeChangerSwitched) themechanger.checked = !themechanger.checked;
  });
  themes.forEach(theme => theme.toggleAttribute('disabled'));
  html.toggleAttribute('data-theme-dark');
}

themeChangers.forEach(themeChanger => themeChanger.addEventListener('change', function() {
  themeSwitch(themeChanger);
}));