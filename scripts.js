document.addEventListener('DOMContentLoaded', function () {
    // Animações da seção de herói
    gsap.from('.hero-content h1', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
    gsap.from('.hero-content p', { duration: 1, y: -50, opacity: 0, delay: 0.5, ease: 'bounce' });

    // Animações para seções ao rolar a página
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Animação de entrada para imagens das seções
    const images = document.querySelectorAll('.section-image, .service-image, .portfolio-image');
    images.forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 1
        });
    });

    // Animações dos títulos
    const titles = document.querySelectorAll('h2, h3');
    titles.forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: -20,
            duration: 0.8
        });
    });

    // Rolagem suave
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Animação para o formulário de contato
    gsap.from('#contact-form', {
        scrollTrigger: {
            trigger: '#contact-form',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Animação para os campos do formulário
    const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea, #contact-form button');
    formFields.forEach((field, index) => {
        gsap.from(field, {
            scrollTrigger: {
                trigger: field,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 0.5,
            delay: index * 0.1
        });
    });
});
