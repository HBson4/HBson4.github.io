const darkModeToggle = document.getElementById('dark-mode-checkbox');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const html = document.querySelector('html');

// Event listener for the dark mode toggle
darkModeToggle.addEventListener('change', function () {
    main.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    html.classList.toggle('dark');
});