let themeBtn = document.querySelector('#theme-selector');
themeBtn.addEventListener('click', function() {
    if (themeBtn.classList.contains('bi-moon')) {
        themeBtn.classList.remove('bi-moon');
        themeBtn.classList.add('bi-sun');
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        themeBtn.classList.add('bi-moon');
        themeBtn.classList.remove('bi-sun');
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
});