/*==================== TOGGLE MENU MÓVIL ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Mostrar menú */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Ocultar menú */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Ocultar menú al hacer click en un enlace */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CAMBIAR FONDO DEL HEADER AL HACER SCROLL ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Cuando el scroll es mayor a 50vh, añade la clase scroll-header
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== MOSTRAR BOTÓN SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Cuando el scroll es mayor a 350 viewport, añade la clase show-scroll
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== RESALTAR ENLACE ACTIVO EN EL MENÚ SEGÚN SCROLL ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 100,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== ANIMACIONES REVEAL EN SCROLL ====================*/
const revealElements = document.querySelectorAll('.reveal-fade, .reveal-up, .reveal-left, .reveal-right');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // Añade delay si está definido en el estilo en línea
            if(entry.target.style.getPropertyValue('--delay')) {
                entry.target.style.transitionDelay = entry.target.style.getPropertyValue('--delay');
            }
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Dejar de observar una vez que ya apareció
        }
    });
};

const revealOptions = {
    threshold: 0.1, // 10% del elemento visible para activar
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});
