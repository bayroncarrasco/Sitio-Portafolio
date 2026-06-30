const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // Si el usuario ya eligió antes, respetamos eso
        applyTheme(savedTheme);
    } else {
        // Si NO hay elección guardada → usamos la hora
        const hour = new Date().getHours();
        const isNight = hour >= 19 || hour < 7;

        applyTheme(isNight ? 'dark' : 'light');
    }
});

toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';

    applyTheme(theme);
    localStorage.setItem('theme', theme);
});