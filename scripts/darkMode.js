const darkModeToggle = document.getElementById('dark-mode-checkbox');
const main = document.querySelector('main');

// Event listener for the dark mode toggle
darkModeToggle.addEventListener('change', function () {
    main.classList.toggle('dark');
});