const html = document.documentElement;
const themeChangers = document.querySelectorAll('.theme_changer');
const themes = document.querySelectorAll('[data-type="theme"]');

function themeSwitch(otherSwitcherNum) {
  themeChangers[otherSwitcherNum].checked = !themeChangers[otherSwitcherNum].checked;
  themes.forEach(theme => theme.toggleAttribute('disabled'));
  html.toggleAttribute('data-theme-dark');
}

themeChangers[0].addEventListener('change', function() {
  themeSwitch(1);
});

themeChangers[1].addEventListener('change', function() {
  themeSwitch(0);
});