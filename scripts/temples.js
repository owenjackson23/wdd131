const headerNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

// Toggle the navigation menu when the hamburger button is clicked
hamButton.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});