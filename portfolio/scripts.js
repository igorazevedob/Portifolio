// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations
    gsap.from("nav ul li", {
        duration: 1,
        y: -30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5
    });

    gsap.from(".hero h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".hero p", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5
    });

    gsap.from(".services-container div, .portfolio-container div", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const url = `https://api.whatsapp.com/send?phone=5511958766712&text=Nome:%20${name}%0AEmail:%20${email}%0AMensagem:%20${message}`;
        window.open(url, '_blank');
    });
});
