console.log('hello');

const navBttn = document.getElementById('hamburger');
const closeBttn = document.getElementById('exit');

navBttn.onclick = () => {
    let navLinks = document.getElementById('site-nav');
    navLinks.classList.toggle("open");
};

closeBttn.onclick = () => {
    let navLinks = document.getElementById('site-nav');
    navLinks.classList.toggle("open");
};