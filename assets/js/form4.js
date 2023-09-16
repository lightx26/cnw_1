window.addEventListener("DOMContentLoaded", (event) => {

    const btnchange = document.getElementById('btnchange');
    const colortext = document.getElementById('colortext');
    
    function changeBackgroundColor() {
        var color = document.getElementById('colortext').value;
        document.body.style.background = color;
    }
    
    btnchange.addEventListener('click', changeBackgroundColor);
    colortext.addEventListener('keypress', (event) => {
        if (event.key == "Enter") {
            event.preventDefault();
            btnchange.click();
        }
    });

    
});