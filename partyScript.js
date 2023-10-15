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


// Replace with your own Giphy API key
const API_KEY = 'YOUR_GIPHY_API_KEY';
const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;


fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.images.original.url); // Log the entire 'data' portion

        if (data.data.images.original.url) {
            const gifUrl = data.data.images.original.url;
            document.body.style.backgroundImage = `url(${gifUrl})`;
        } else {
            console.error("Unexpected data structure:", data);
        }
    })
    .catch(error => {
        console.error("Error fetching GIF:", error);
    });
