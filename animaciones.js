document.addEventListener("DOMContentLoaded", () => {
    const marca = document.querySelector(".marca");

    if (marca) {
        marca.addEventListener("mouseenter", () => {
            marca.classList.add("marca-activa");
        });

        marca.addEventListener("mouseleave", () => {
            marca.classList.remove("marca-activa");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(
        "main section, .rejilla > li, .rejilla-actividades > li"
    );

    elementos.forEach((elemento) => {
        elemento.classList.add("revelar");
    });

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });
});