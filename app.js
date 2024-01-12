
// Fecha de inicio
const startDate = new Date('12/09/2023');

// Función para actualizar el contador
function updateCounter() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    document.getElementById('counter').innerHTML = `Hemos estado juntos por:<br>
        ${years} años, ${months % 12} meses, ${days % 30} días, ${hours} horas y ${minutes} minutos.`;
}

// Actualizar cada segundo
setInterval(updateCounter, 1000);

// Llamar a la función por primera vez
updateCounter();
