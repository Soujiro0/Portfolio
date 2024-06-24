/**
 * Author: Jerry Castrudes
 */

// Entry Point
toggleSideBar()

function toggleSideBar() {
    const navigation = document.querySelector('nav');
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const hamburgerMenuIcon = document.querySelectorAll(".hamburger-menu-icon > span");
    const sideBar = document.querySelector(".side-bar");
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenuIcon.forEach((icon) => {
            icon.classList.toggle('active-menu');
        });
        sideBar.classList.toggle('active-side-bar');
        if (sideBar.classList.contains('active-side-bar')) {
            navigation.classList.toggle('active-nav');
        } else {
            setTimeout(() => {
                navigation.classList.toggle('active-nav');
            }, 500);
        }
    });
}