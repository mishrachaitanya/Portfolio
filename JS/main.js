/*  Toggling Navbar- Icon  */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
} 

/*  Scrolling section  active  */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id  = sec.getAttribute('id')

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active'); // 52.20Hrs 
                });
            };
        });

/* Sticky Navbar  */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*  Remove toggle icon and navbar  */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    };

/*  Scroll Reveal  */
ScrollReveal({ 
    distance: '80px',
    duration: 1980,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right' });

 /*  Typed JS  */
const typed = new Typed('.multiple-text',{
    strings:['Data Scientist','Web Developer','Deep Learning Practitioner',],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
    // backDelay:
})

document.getElementById("toggleButton").onclick = function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    var extraText = document.getElementById("extraText");
    if (extraText.classList.contains("collapsed")) {
        extraText.classList.remove("collapsed");
        this.textContent = "Read Less";
    } else {
        extraText.classList.add("collapsed");
        this.textContent = "Read More";
    }
};
