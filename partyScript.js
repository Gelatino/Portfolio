window.onload = async function() {
    try {
        const response = await fetch('gifs.csv');
        const csvText = await response.text();

        const gifUrls = csvText.split('\n').filter(url => url.trim() !== '');

        const randomGifUrl = gifUrls[Math.floor(Math.random() * gifUrls.length)];

        document.body.style.backgroundImage = `url(${randomGifUrl})`;
    } catch (error) {
        console.error('Error fetching or parsing the CSV:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var targetDate = new Date("October 20, 2023 21:00:00").getTime();

    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "The time has come!";
        }
    }, 1000);
});
