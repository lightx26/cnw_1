window.addEventListener("DOMContentLoaded", (event) => {

    const blurtext = document.getElementById('blurtext');

    blurtext.addEventListener('blur', () => {
        blurtext.value = blurtext.value.toUpperCase();
    });

    
});