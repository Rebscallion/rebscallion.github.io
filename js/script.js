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

let dt = new Date();
document.getElementById("datetime").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));