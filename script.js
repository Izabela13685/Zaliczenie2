// Toggle Dark Mode
const toggleThemeButton = document.querySelector('#toggle-theme');
const body = document.querySelector('body');
const header = document.querySelector('header');

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    // Update button text
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '🌞 Tryb jasny';
    } else {
        toggleThemeButton.textContent = '🌙 Tryb ciemny';
    }
});
