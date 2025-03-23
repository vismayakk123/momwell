document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 2000); // Hide loading screen after 2 seconds
});