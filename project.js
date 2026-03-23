
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // If you scroll down 50 pixels...
            nav.classList.add('scrolled'); // ...add the blue background
        } else {
            nav.classList.remove('scrolled'); // ...remove it when back at the top
        }
    });
