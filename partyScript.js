// Replace with your own Giphy API key
const API_KEY = 'YOUR_API_KEY_PLACEHOLDER';
const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


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
