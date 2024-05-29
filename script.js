document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('nav ul li a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Has hecho clic en ${enlace.textContent}`);
        });
    });
});
