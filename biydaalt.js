const menu = document.querySelector('.menu');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        menu.classList.remove('active');
    }
});

const searchIcon = document.querySelector('.search-icon');
const searchWindow = document.querySelector('.search-window');
const exitAndLogoutIcon = document.querySelector('.exit-icon'); // Use a single icon for both exit and logout
const searchInput = document.querySelector('#search-input');

searchIcon.addEventListener('click', () => {
    searchWindow.style.right = '0';
    exitAndLogoutIcon.style.display = 'block'; // Show the combined icon
    searchInput.focus();
});

exitAndLogoutIcon.addEventListener('click', () => {
    searchWindow.style.right = '-100%';
    exitAndLogoutIcon.style.display = 'none'; // Hide the combined icon
    searchInput.focus();

    // Common logic for both exit and logout actions
    // For example, redirect to a logout page or trigger a logout API call
    // You can add any additional logic here
});

const closeSearchButton = document.querySelector('#close-popup');
closeSearchButton.addEventListener('click', () => {
    searchWindow.style.right = '-100%';
    exitAndLogoutIcon.style.display = 'none'; // Hide the combined icon
});

const openPopupButton = document.querySelector('#open-popup');
const popupScreen = document.querySelector('.popup-screen');

searchButton.addEventListener('click', () => {
    popupScreen.style.display = 'block';
});

openPopupButton.addEventListener('click', () => {
    popupScreen.style.display = 'none';
    searchWindow.style.right = '-100%';
});