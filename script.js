//Mueve suavemente el scroll hacia el la direcion y hace que el articule este separado 30px del top
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 30;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
