const changer = document.getElementById('theme-changer');
const burger_changer = document.getElementById('burger-theme-changer');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});

burger_changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});

