document.getElementById('donateButton').addEventListener('click', function() {
    window.location.href = 'https://www.paypal.com/pools/c/96ytF4o5tA';
});

// Function to detect the user's country
async function detectCountry() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country_name;
    } catch (error) {
        console.error('Error detecting country:', error);
        return null;
    }
}

// Function to switch text based on country
function switchText(country) {
    if (country === 'Mexico') {
        document.getElementById('header-text').innerText = 'Gana una hermosa alfombra hecha a mano y apoya la película "Oneira"';
        document.getElementById('prize-title').innerText = 'El Premio';
        document.getElementById('prize-text').innerText = 'Una hermosa alfombra hecha a mano que representa el mito del Minotauro, con Ariadna y su hilo dorado. Esta alfombra está hecha con la técnica de aguja de perforación, completamente a mano. (Solamente CDMX y alrededores)';
        document.getElementById('raffle-title').innerText = 'La Rifa';
        document.getElementById('raffle-text').innerText = 'Dona 120 Pesos a través de PayPal para tener la oportunidad de ganar. El ganador será elegido el 2 de agosto y anunciado en Instagram a las 16:00.';
        document.getElementById('cause-title').innerText = 'La Causa';
        document.getElementById('cause-text').innerText = 'Queremos hacer un cortometraje sobre Emili, una aspirante a actriz de México, que enfrenta desafíos en su búsqueda de la fama. Emili y su madre dirigen un pequeño restaurante en un pueblo olvidado. Cuando una gran empresa anuncia una convocatoria de casting, Emili lo ve como su gran oportunidad. Con el apoyo de sus amigos, lucha con la autoconfianza y la presión de su madre para quedarse y ayudar.';
        document.getElementById('reason-title').innerText = 'La Razón';
        document.getElementById('reason-text').innerText = 'Queremos contar la historia de aquellos con grandes sueños pero en circunstancias difíciles. "Oneira" no se trata solo de talento o trabajo duro; se trata de intentar contra las adversidades. Muchas personas no alcanzan sus sueños, y quiero celebrar sus historias y mostrar que importan.';
    }
}

// Detect country and switch text accordingly
detectCountry().then(country => {
    if (country) {
        switchText(country);
    }
});

// Function to make a letter fall and navigate to the second section
function makeLetterFall() {
    const fallingLetter = document.querySelector('.header-content h1:nth-child(3)'); // Select the 3rd letter for animation
    fallingLetter.classList.add('falling');
    console.log('ho');
    fallingLetter.addEventListener('animationend', () => {
        document.getElementById('prize').scrollIntoView({ behavior: 'smooth' });
    });
}

// Trigger the letter fall after 3 seconds
setTimeout(makeLetterFall, 3000);
