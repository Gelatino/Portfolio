document.getElementById('donateButton').addEventListener('click', function() {
    window.location.href = 'https://www.paypal.com/donate/link-to-your-paypal';
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
    if (country === 'Germany') {
        document.getElementById('header-text').innerText = 'Gewinne einen wunderschönen handgefertigten Teppich und unterstütze den Film "Oneira"';
        document.getElementById('prize-title').innerText = 'Der Preis';
        document.getElementById('prize-text').innerText = 'Spenden Sie $10 über PayPal für eine Chance, einen handgefertigten Teppich zu gewinnen. Alle Einnahmen unterstützen den Film "Oneira".';
        document.getElementById('cause-title').innerText = 'Die Ursache';
        document.getElementById('cause-text').innerText = 'Ich möchte die Geschichte so vieler Menschen erzählen, die große Träume haben, diese aber aufgrund ihrer Situation nicht erreichen können. Wir sind es gewohnt, tröstende Filme zu sehen, in denen die Hauptfigur alles bekommt, was sie will. Aber in "Oneira" geht es in Emilis Geschichte nicht nur darum, wie talentiert sie ist oder wie hart sie arbeitet, sondern darum, wie sie es versucht, selbst wenn die Chancen gegen sie stehen. Es geht um Glück und darum, in einer schwierigen Situation geboren zu werden. Wie Emili erreichen Tausende von Menschen ihre Träume nicht. Ich wollte sie feiern und zeigen, dass ihre Geschichten wichtig sind und es verdient haben, erzählt zu werden.';
        document.getElementById('why-title').innerText = 'Das Warum';
        document.getElementById('why-text').innerText = 'Die Unterstützung dieser Verlosung gibt Ihnen nicht nur die Chance, einen wunderschönen handgefertigten Teppich zu gewinnen, sondern hilft auch, den Film "Oneira" zum Leben zu erwecken. Der Film zielt darauf ab, auf die Schwierigkeiten talentierter Menschen aufmerksam zu machen, die trotz ihrer Bemühungen und Talente enorme Hindernisse überwinden müssen. Ihr Beitrag hilft, ihre Geschichten zu teilen und das Bewusstsein zu schärfen.';
    } else if (country === 'Mexico') {
        document.getElementById('header-text').innerText = 'Gana una hermosa alfombra hecha a mano y apoya la película "Oneira"';
        document.getElementById('prize-title').innerText = 'El Premio';
        document.getElementById('prize-text').innerText = 'Dona $10 a través de PayPal para tener la oportunidad de ganar una alfombra hecha a mano. Todos los ingresos apoyan la película "Oneira".';
        document.getElementById('cause-title').innerText = 'La Causa';
        document.getElementById('cause-text').innerText = 'Quiero contar la historia de tantas personas que tienen grandes sueños, pero no pueden alcanzarlos debido a su situación. Estamos acostumbrados a películas reconfortantes donde el personaje principal consigue todo lo que desea. Pero en "Oneira", la historia de Emili no se trata solo de cuán talentosa es o cuánto se esfuerza, sino de cómo lo intenta, incluso cuando las probabilidades no están a su favor. Se trata de la suerte, y de nacer en una situación difícil. Al igual que Emili, miles de personas no alcanzan sus sueños. Quería celebrarlos y mostrar que sus historias son importantes y merecen ser contadas.';
        document.getElementById('why-title').innerText = 'El Por Qué';
        document.getElementById('why-text').innerText = 'Apoyar esta rifa no solo te da la oportunidad de ganar una hermosa alfombra hecha a mano, sino que también ayuda a hacer realidad la película "Oneira". La película tiene como objetivo arrojar luz sobre las luchas de personas talentosas que, a pesar de sus esfuerzos y talentos, enfrentan enormes obstáculos. Tu contribución ayuda a compartir sus historias y crear conciencia.';
    }
}

// Detect country and switch text accordingly
detectCountry().then(country => {
    if (country) {
        switchText(country);
    }
});
