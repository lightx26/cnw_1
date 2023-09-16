window.onload = function() {
    var leftIframe = document.getElementById("left-content");
    var mainIframe = document.getElementById("main-content");
    var innerDoc = leftIframe.contentDocument || leftIframe.contentWindow.document;

    var home = innerDoc.querySelector("a");
    home.addEventListener('click', (event) => {
        event.preventDefault();
        window.location = home.href;
    })

    var links = innerDoc.querySelectorAll(".reference");
    
    links.forEach(atag => {
        atag.addEventListener('click', (event) => {
            event.preventDefault();
            mainIframe.src = atag.href;
        })
    });
}